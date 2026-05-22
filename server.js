// Mighty Brand DB server.
// Serves the static brand-DB UI, but sources data live from Postgres and
// streams image assets from the private mighty-assets bucket via presigned
// redirects. The frontend is unchanged: it still reads window.__MIGHTY_DB and
// references images by their original relative paths (photos/*, elements/*).
const path = require("path");
const fs = require("fs");
const express = require("express");
const { Pool } = require("pg");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const app = express();
const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const s3 = new S3Client({
  endpoint: process.env.AWS_ENDPOINT_URL,
  region: process.env.AWS_DEFAULT_REGION || "auto",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  forcePathStyle: false,
});
const BUCKET = process.env.AWS_S3_BUCKET_NAME;

// Static (non-DB) sections of the database come from the committed _database.js.
function staticSections() {
  const src = fs
    .readFileSync(path.join(ROOT, "_database.js"), "utf8")
    .replace(/^window\.__MIGHTY_DB\s*=\s*/, "")
    .replace(/;\s*$/, "");
  const db = JSON.parse(src);
  delete db.blocks;
  delete db.elements;
  delete db.photos;
  return db;
}

// Live data from Postgres, mapped back to the camelCase shape the UI expects.
async function buildDatabase() {
  const base = staticSections();
  const [blocks, elements, photos] = await Promise.all([
    pool.query("SELECT * FROM blocks ORDER BY section, version"),
    pool.query("SELECT * FROM elements ORDER BY category, id"),
    pool.query("SELECT * FROM photos ORDER BY category, id"),
  ]);
  base.blocks = blocks.rows.map((b) => ({
    id: b.id, name: b.name, version: b.version, section: b.section,
    figmaNodeId: b.figma_node_id, description: b.description,
    file: `${b.id}/index.html`, html: b.html, css: b.css,
    width: b.width, height: b.height, variables: b.variables,
  }));
  base.elements = elements.rows.map((e) => ({
    id: e.id, category: e.category, name: e.name, figmaNodeId: e.figma_node_id,
    description: e.description, file: e.file, thumbnail: e.file,
  }));
  base.photos = photos.rows.map((p) => ({
    id: p.id, category: p.category, name: p.name, figmaNodeId: p.figma_node_id,
    description: p.description, products: p.products,
    file: p.file, thumbnail: p.file,
  }));
  return base;
}

app.get("/_database.js", async (_req, res) => {
  try {
    const db = await buildDatabase();
    res.type("application/javascript");
    res.send("window.__MIGHTY_DB = " + JSON.stringify(db) + ";");
  } catch (err) {
    console.error("DB build failed:", err);
    res.status(500).type("application/javascript").send("window.__MIGHTY_DB = {error:" + JSON.stringify(String(err)) + "};");
  }
});

// JSON API — the machine-readable face of the database, for AI/skills to query.
app.get("/api/database.json", async (_req, res) => {
  try {
    res.json(await buildDatabase());
  } catch (err) {
    console.error("api database failed:", err);
    res.status(500).json({ error: String(err) });
  }
});

app.get("/api/:kind(blocks|elements|photos)", async (req, res) => {
  try {
    const db = await buildDatabase();
    res.json(db[req.params.kind]);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

// Search across name/description/category/section, optionally scoped by ?type=.
app.get("/api/search", async (req, res) => {
  try {
    const q = String(req.query.q || "").toLowerCase().trim();
    const type = req.query.type; // blocks | elements | photos (optional)
    const db = await buildDatabase();
    const kinds = type ? [type] : ["blocks", "elements", "photos"];
    const hit = (o) =>
      !q ||
      [o.name, o.description, o.category, o.section, o.id]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    const results = {};
    for (const k of kinds) results[k] = (db[k] || []).filter(hit);
    res.json({ query: q, type: type || "all", results });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

// Image assets: redirect to a short-lived presigned URL from the private bucket.
async function serveAsset(req, res) {
  const key = decodeURIComponent(req.path.replace(/^\//, ""));
  try {
    const url = await getSignedUrl(s3, new GetObjectCommand({ Bucket: BUCKET, Key: key }), { expiresIn: 3600 });
    res.redirect(302, url);
  } catch (err) {
    console.error("asset failed:", key, err.name);
    res.status(404).send("asset not found");
  }
}
app.get("/photos/*", serveAsset);
app.get("/elements/*", serveAsset);

// Everything else (HTML pages, CSS, _nav.js, foundations/, _assets/) is static.
app.use(express.static(ROOT, { index: "foundation.html" }));

app.listen(PORT, () => console.log(`Mighty Brand DB on :${PORT}`));
