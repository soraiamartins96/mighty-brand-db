window.__MIGHTY_DB = {
  "$schema": "./database.schema.json",
  "source": "Figma — Mighty — Lifecycle (fileKey LSIR0XK4mGRknacXEx7KyC) — Test page (3399:8388)",
  "lastUpdated": "2026-05-21",
  "owner": "Soraia Martins (soraia@parallel9.com)",
  "scope": "Everything on the Mighty Figma Test page. Foundation is brand-locked; blocks are HTML/CSS-ready; elements + photos are the supporting libraries. Brand voice = OOMPHY · FUNNY · PALLY. Customer is the hero, brand is the guide.",
  "navigation": [
    {
      "id": "foundation",
      "label": "Foundation",
      "url": "foundation.html"
    },
    {
      "id": "blocks",
      "label": "Email Blocks",
      "url": "blocks.html"
    },
    {
      "id": "elements",
      "label": "Elements",
      "url": "elements.html"
    },
    {
      "id": "photos",
      "label": "Photos",
      "url": "photos.html"
    }
  ],
  "foundation": {
    "colors": {
      "figmaNodeId": "3416:9323",
      "groups": [
        {
          "name": "Main",
          "note": "brand-locked",
          "swatches": [
            {
              "name": "Jet",
              "hex": "#000000",
              "token": "Main/Jet"
            },
            {
              "name": "Not M.L.K.",
              "hex": "#F5F4EC",
              "token": "Main/Not M.L.K."
            },
            {
              "name": "Spark",
              "hex": "#F0B504",
              "token": "Main/Spark"
            }
          ]
        },
        {
          "name": "Milk",
          "note": "one per Milk SKU",
          "swatches": [
            {
              "name": "Whole",
              "hex": "#0098D5",
              "token": "Milk/Whole"
            },
            {
              "name": "Semi",
              "hex": "#00BC70",
              "token": "Milk/Semi"
            },
            {
              "name": "Barista",
              "hex": "#0B0F12",
              "token": "Milk/Barista"
            },
            {
              "name": "Unsweetened",
              "hex": "#E86A0A",
              "token": "Milk/Unsweetened"
            },
            {
              "name": "Original",
              "hex": "#547D94",
              "token": "Milk/Original"
            }
          ]
        },
        {
          "name": "Protein",
          "note": "one per Protein flavour",
          "swatches": [
            {
              "name": "Strawberries & Cream",
              "hex": "#EB5A3F",
              "token": "Protein/Strawberries & Cream"
            },
            {
              "name": "Cookies & Cream",
              "hex": "#00AAE3",
              "token": "Protein/Cookies & Cream"
            },
            {
              "name": "Chocolate",
              "hex": "#8D82BD",
              "token": "Protein/Chocolate"
            },
            {
              "name": "Super Berry",
              "hex": "#E65471",
              "token": "Protein/Super Berry"
            },
            {
              "name": "Salted Caramel",
              "hex": "#F7A600",
              "token": "Protein/Salted Caramel"
            }
          ]
        },
        {
          "name": "Shakes",
          "note": "one per Shake flavour",
          "swatches": [
            {
              "name": "Salted Caramel",
              "hex": "#00ABAA",
              "token": "Shakes/Salted Caramel"
            },
            {
              "name": "Banana",
              "hex": "#FFDA00",
              "token": "Shakes/Banana"
            },
            {
              "name": "Chocolate",
              "hex": "#8B6FAF",
              "token": "Shakes/Chocolate"
            }
          ]
        },
        {
          "name": "Ice Cream",
          "note": "one per Ice Cream flavour",
          "swatches": [
            {
              "name": "Double Chocolate Pretzel",
              "hex": "#8B6FAF",
              "token": "Ice Cream/Double Chocolate Pretzel"
            },
            {
              "name": "Salted Caramel Brownie",
              "hex": "#F7A600",
              "token": "Ice Cream/Salted Caramel Brownie"
            }
          ]
        }
      ],
      "description": "The Mighty palette runs roughly Not M.L.K. 50% / Jet 40% / Spark 10% across any composition. Main = brand-locked, always together. Product-line groups (Milk / Protein / Shakes / Ice Cream) are situational — pick by SKU and never mix product palettes within one block."
    },
    "fonts": {
      "figmaNodeId": "3416:9306",
      "note": "Only two brand fonts. Montserrat is the workhorse (all headings + all body sizes). Flood Std is the brushy alternate for any heading (typically used for 1–3 emphasis words inside a Montserrat headline). (Figma design files for Text Block v2/v4/v5 reference 'URW Geometric' — this is a stale inconsistency in those file variants, not part of the brand type system.)",
      "families": [
        {
          "name": "Montserrat",
          "role": "primary",
          "use": "Headings (H1–H6) and body copy (Body L / Body / Body S / Caption).",
          "weights": [
            "ExtraBold (800)",
            "Bold (700)",
            "Medium (500)"
          ],
          "webStatus": "loaded · Google Fonts"
        },
        {
          "name": "Flood Std",
          "role": "accent",
          "use": "Brushy alternate for any of the 6 heading levels. Used for 1–3 uppercase emphasis words inside a headline, or as a full hand-painted heading.",
          "weights": [
            "Regular (400)"
          ],
          "webStatus": "Self-hosted in this catalog at _assets/fonts/flood-std-regular.otf (loaded via @font-face). In production emails the same .woff2/.otf must be embedded; cloud Figma still can't load it, so Figma renders fall back to Montserrat."
        }
      ],
      "scale": [
        {
          "name": "Heading 1",
          "size_px": 72,
          "lineHeight": 1,
          "weight": "ExtraBold 800",
          "letterSpacing": 0,
          "case": "UPPERCASE"
        },
        {
          "name": "Heading 2",
          "size_px": 48,
          "lineHeight": 1,
          "weight": "ExtraBold 800",
          "letterSpacing": 0,
          "case": "UPPERCASE"
        },
        {
          "name": "Heading 3",
          "size_px": 32,
          "lineHeight": 1,
          "weight": "ExtraBold 800",
          "letterSpacing": 0,
          "case": "UPPERCASE"
        },
        {
          "name": "Heading 4",
          "size_px": 24,
          "lineHeight": 1.2,
          "weight": "ExtraBold 800",
          "letterSpacing": 0,
          "case": "UPPERCASE"
        },
        {
          "name": "Heading 5",
          "size_px": 18,
          "lineHeight": 1,
          "weight": "Bold 700",
          "letterSpacing": "+1px",
          "case": "UPPERCASE"
        },
        {
          "name": "Heading 6",
          "size_px": 14,
          "lineHeight": 1.2,
          "weight": "Bold 700",
          "letterSpacing": "+1px",
          "case": "UPPERCASE"
        },
        {
          "name": "Body L",
          "size_px": 24,
          "lineHeight": 1.4,
          "weight": "Medium 500",
          "letterSpacing": "+0.48px",
          "case": "sentence"
        },
        {
          "name": "Body",
          "size_px": 22,
          "lineHeight": 1.4,
          "weight": "Medium 500",
          "letterSpacing": "+0.44px",
          "case": "sentence"
        },
        {
          "name": "Body S",
          "size_px": 18,
          "lineHeight": 1.4,
          "weight": "Medium 500",
          "letterSpacing": "+0.36px",
          "case": "sentence"
        },
        {
          "name": "Caption",
          "size_px": 14,
          "lineHeight": 1.6,
          "weight": "Medium 500",
          "letterSpacing": "+0.28px",
          "case": "sentence"
        }
      ],
      "description": "Two fonts. Montserrat is the workhorse (all headings + body). Flood is the brushy accent — only ever inside a Montserrat headline, used for 1–3 emphasis words, typically in Spark yellow. Headlines run upper-case with kerning 0; body runs +50 kerning with generous leading."
    },
    "buttons": {
      "figmaNodeId": "3416:9198",
      "sizes": [
        {
          "name": "Body",
          "fontSize": 22,
          "padding": "16×48",
          "lineHeight": 1.4
        },
        {
          "name": "Hero",
          "fontSize": 18,
          "padding": "12×32",
          "lineHeight": 1.4
        }
      ],
      "colors": [
        {
          "name": "Jet",
          "bg": "#000000",
          "fg": "#F5F4EC",
          "shadow": "#F5F4EC",
          "in_figma": true,
          "note": "Primary CTA"
        },
        {
          "name": "Unsweetened",
          "bg": "#E86A0A",
          "fg": "#F5F4EC",
          "shadow": "#F5F4EC",
          "in_figma": true,
          "note": "High-emphasis promo"
        },
        {
          "name": "Spark",
          "bg": "#F0B504",
          "fg": "#000000",
          "shadow": "#000000",
          "in_figma": false,
          "note": "For dark/busy surfaces. Added in this catalog, not yet in Figma."
        }
      ],
      "description": "Two sizes (Body, Hero), three colours (Jet, Unsweetened, Spark). Always carry the offset shadow."
    },
    "logos": {
      "figmaNodeId": "3416:9221",
      "variants": [
        {
          "name": "Primary / Jet",
          "figmaNodeId": "73:3469",
          "asset": "foundations/assets/logo-primary-jet.png",
          "width": 149,
          "height": 83,
          "use": "Default wordmark on cream backgrounds. With sparkles."
        },
        {
          "name": "Primary / Not M.L.K.",
          "figmaNodeId": "73:3467",
          "asset": "foundations/assets/logo-primary-mlk.png",
          "width": 151,
          "height": 83,
          "use": "Default wordmark on dark backgrounds. With sparkles."
        },
        {
          "name": "Secondary / Jet",
          "figmaNodeId": "73:3468",
          "asset": "foundations/assets/logo-secondary-jet.png",
          "width": 149,
          "height": 83,
          "use": "Wordmark without sparkles, on light backgrounds."
        },
        {
          "name": "Secondary / Not M.L.K.",
          "figmaNodeId": "73:3466",
          "asset": "foundations/assets/logo-secondary-mlk.png",
          "width": 151,
          "height": 83,
          "use": "Wordmark without sparkles, on dark backgrounds."
        },
        {
          "name": "Emblem / Black",
          "figmaNodeId": "75:711",
          "asset": "foundations/assets/logo-emblem-black.png",
          "width": 69,
          "height": 92,
          "use": "Stylised M with lightning bolt. Avatar, favicon, social profile."
        },
        {
          "name": "Emblem / Spark",
          "figmaNodeId": "75:710",
          "asset": "foundations/assets/logo-emblem-spark.png",
          "width": 69,
          "height": 91,
          "use": "Stylised M with yellow lightning bolt, on dark surfaces."
        }
      ],
      "description": "Always tilted at 10.5° — non-negotiable. Primary is the default (with sparkles); Secondary drops the spark only when it won't fit. Logo appears only in Jet, Not M.L.K., or Spark. Emblem is the M+lightning sub-logo for tight surfaces (avatar, favicon, in-pattern fills)."
    }
  },
  "blocks": [
    {
      "id": "top-strip-v1",
      "name": "Top Strip",
      "version": "v1",
      "section": "Top Strip",
      "tags": [
        "header",
        "single-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13762",
      "description": "Slim black announcement bar. Centered uppercase line flanked by two yellow dots.",
      "file": "top-strip-v1/index.html",
      "preview": "top-strip-v1/preview.png",
      "width": 600,
      "height": 40,
      "variables": {
        "backgroundColor": "#000000",
        "dotColor": "#F0B504",
        "textColor": "#F5F4EC"
      }
    },
    {
      "id": "top-strip-v2",
      "name": "Top Strip",
      "version": "v2",
      "section": "Top Strip",
      "tags": [
        "header",
        "single-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13767",
      "description": "Slim black announcement bar with a checkmark and three short messages separated by dots — for multi-claim banners.",
      "file": "top-strip-v2/index.html",
      "preview": "top-strip-v2/preview.png",
      "width": 600,
      "height": 40,
      "variables": {
        "backgroundColor": "#000000",
        "dotColor": "#F0B504",
        "textColor": "#F5F4EC"
      }
    },
    {
      "id": "hero-section-v1",
      "name": "Hero Section",
      "version": "v1",
      "section": "Hero Section",
      "tags": [
        "hero",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13779",
      "description": "Top-of-email hero. Mighty logo at the top, full-bleed background photo, yellow rounded headline card at the bottom with CTA.",
      "file": "hero-section-v1/index.html",
      "preview": "hero-section-v1/preview.png",
      "width": 600,
      "height": 1066,
      "variables": {
        "backgroundImage": "assets/hero-bg.png",
        "cardBackgroundColor": "#F0B504",
        "cardBorderRadius": 24,
        "headlineColor": "#000000",
        "accentColor": "#F5F4EC",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "hero-section-v2",
      "name": "Hero Section",
      "version": "v2",
      "section": "Hero Section",
      "tags": [
        "hero",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13785",
      "description": "Full-yellow hero. Logo top, left-aligned headline + Flood Std accent + body + CTA, with a decorative botanical illustration at the bottom.",
      "file": "hero-section-v2/index.html",
      "preview": "hero-section-v2/preview.png",
      "width": 600,
      "height": 1059,
      "variables": {
        "backgroundColor": "#F0B504",
        "headlineColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC",
        "decoration": "assets/decoration.png"
      }
    },
    {
      "id": "hero-section-v3",
      "name": "Hero Section",
      "version": "v3",
      "section": "Hero Section",
      "tags": [
        "hero",
        "with-image",
        "with-cta",
        "full-bleed",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13792",
      "description": "Full-bleed lifestyle hero with logo on top and a rounded card at the bottom containing a centred headline, body, and CTA.",
      "file": "hero-section-v3/index.html",
      "preview": "hero-section-v3/preview.png",
      "width": 600,
      "height": 930,
      "variables": {
        "backgroundImage": "assets/hero-bg.png",
        "headlineColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "hero-section-v4",
      "name": "Hero Section",
      "version": "v4",
      "section": "Hero Section",
      "tags": [
        "hero",
        "decorative",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13801",
      "description": "Compact yellow hero with a decorative botanical/graph artwork along the top, logo, and centred headline + body. No CTA.",
      "file": "hero-section-v4/index.html",
      "preview": "hero-section-v4/preview.png",
      "width": 600,
      "height": 467,
      "variables": {
        "backgroundColor": "#F0B504",
        "headlineColor": "#000000",
        "accentColor": "#F5F4EC",
        "decoration": "assets/decoration.svg"
      }
    },
    {
      "id": "hero-section-v5",
      "name": "Hero Section",
      "version": "v5",
      "section": "Hero Section",
      "tags": [
        "hero",
        "with-cta",
        "product",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13855",
      "description": "Cream hero with cross-hatch backdrop, a yellow rounded card centring the logo, headline, body, CTA, and two tilted product cartons.",
      "file": "hero-section-v5/index.html",
      "preview": "hero-section-v5/preview.png",
      "width": 600,
      "height": 658,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "cardBackgroundColor": "#F0B504",
        "cardBorderRadius": 40,
        "headlineColor": "#000000",
        "accentColor": "#F5F4EC",
        "productImage1": "assets/product-1.png",
        "productImage2": "assets/product-2.png",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "hero-section-v6",
      "name": "Hero Section",
      "version": "v6",
      "section": "Hero Section",
      "tags": [
        "hero",
        "with-cta",
        "with-image",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:13904",
      "description": "Yellow hero with logo + centred headline + a 2×2 image grid + CTA. Used for lookbook/category emails.",
      "file": "hero-section-v6/index.html",
      "preview": "hero-section-v6/preview.png",
      "width": 600,
      "height": 941,
      "variables": {
        "backgroundColor": "#F0B504",
        "headlineColor": "#000000",
        "tileBorderColor": "#F5F4EC",
        "tileBorderRadius": 14,
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC",
        "gridImage": "assets/grid-image.png"
      }
    },
    {
      "id": "text-block-v1",
      "name": "Text Block",
      "version": "v1",
      "section": "Text Block",
      "tags": [
        "content",
        "single-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12359",
      "description": "Cream section with one big yellow uppercase Montserrat statement. The brand's default statement block.",
      "file": "text-block-v1/index.html",
      "preview": "text-block-v1/preview.png",
      "width": 600,
      "height": 544,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "textColor": "#F0B504"
      }
    },
    {
      "id": "text-block-v2",
      "name": "Text Block",
      "version": "v2",
      "section": "Text Block",
      "tags": [
        "content",
        "multi-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12363",
      "description": "Black background with eyebrow + multi-line headline + long body. Editorial/about-style block. Uses Montserrat ExtraBold for the headline.",
      "file": "text-block-v2/index.html",
      "preview": "text-block-v2/preview.png",
      "width": 600,
      "height": 517,
      "variables": {
        "backgroundColor": "#000000",
        "eyebrowColor": "#F0B504",
        "headlineColor": "#F0B504",
        "bodyColor": "#F5F4EC"
      }
    },
    {
      "id": "text-block-v3",
      "name": "Text Block",
      "version": "v3",
      "section": "Text Block",
      "tags": [
        "content",
        "single-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12361",
      "description": "Quiet cream section with a single centered paragraph. Used to slot a single sentence or intro line.",
      "file": "text-block-v3/index.html",
      "preview": "text-block-v3/preview.png",
      "width": 600,
      "height": 282,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "textColor": "#000000"
      }
    },
    {
      "id": "text-block-v4",
      "name": "Text Block",
      "version": "v4",
      "section": "Text Block",
      "tags": [
        "content",
        "multi-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12367",
      "description": "Black section with Flood Std brushy headline (yellow) + supporting paragraph. No CTA.",
      "file": "text-block-v4/index.html",
      "preview": "text-block-v4/preview.png",
      "width": 600,
      "height": 382,
      "variables": {
        "backgroundColor": "#000000",
        "headlineColor": "#F0B504",
        "bodyColor": "#F5F4EC"
      }
    },
    {
      "id": "text-block-v5",
      "name": "Text Block",
      "version": "v5",
      "section": "Text Block",
      "tags": [
        "content",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12370",
      "description": "Black section with Flood Std headline + body + orange CTA. Use when the text block should drive a click.",
      "file": "text-block-v5/index.html",
      "preview": "text-block-v5/preview.png",
      "width": 600,
      "height": 469,
      "variables": {
        "backgroundColor": "#000000",
        "headlineColor": "#F0B504",
        "bodyColor": "#F5F4EC",
        "ctaBackgroundColor": "#E86A0A",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "multi-product-block-v1",
      "name": "Multi-Product Block",
      "version": "v1",
      "section": "Multi-Product Block",
      "tags": [
        "product",
        "with-image",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12439",
      "description": "Three stacked yellow product rows on black bg. Each row: product photo on alternating sides, title + body, arrow CTA. Compact listing.",
      "file": "multi-product-block-v1/index.html",
      "preview": "multi-product-block-v1/preview.png",
      "width": 600,
      "height": 1041,
      "variables": {
        "frameBackgroundColor": "#000000",
        "rowBackgroundColor": "#F0B504",
        "rowBorderRadius": 24,
        "titleColor": "#000000",
        "bodyColor": "#000000",
        "arrowButtonBgColor": "#000000",
        "arrowButtonShadowColor": "#F5F4EC",
        "productImage": "assets/product.png"
      }
    },
    {
      "id": "multi-product-block-v2",
      "name": "Multi-Product Block",
      "version": "v2",
      "section": "Multi-Product Block",
      "tags": [
        "product",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12461",
      "description": "Three large colored cards on cream bg, each with two-tone headline (Montserrat + Flood Std) + body + CTA + tilted product photo. One card per Mighty variant.",
      "file": "multi-product-block-v2/index.html",
      "preview": "multi-product-block-v2/preview.png",
      "width": 598,
      "height": 1593,
      "variables": {
        "frameBackgroundColor": "#F5F4EC",
        "cardYellow": "#F0B504",
        "cardBlue": "#0098D5",
        "cardOrange": "#E86A0A",
        "cardBorderRadius": 24,
        "headlineColor": "#000000",
        "accentColor": "#F5F4EC",
        "bodyColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC",
        "productImage": "assets/product.png"
      }
    },
    {
      "id": "multi-product-block-v3",
      "name": "Multi-Product Block",
      "version": "v3",
      "section": "Multi-Product Block",
      "tags": [
        "product",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12462",
      "description": "Three alternating product cards: orange → cream → blue. Each card has a tall product photo on alternating sides + title + body + CTA. On an orange frame.",
      "file": "multi-product-block-v3/index.html",
      "preview": "multi-product-block-v3/preview.png",
      "width": 600,
      "height": 1246,
      "variables": {
        "frameBackgroundColor": "#E86A0A",
        "card1Color": "#E86A0A",
        "card2Color": "#F5F4EC",
        "card3Color": "#2178BE",
        "titleColor": "#000000",
        "card3TextColor": "#F5F4EC",
        "ctaBackgroundColor": "#000000",
        "ctaShadowColor": "#F5F4EC",
        "ctaShadowCardColor": "#F0B504",
        "productImage1": "assets/product-1.png",
        "productImage2": "assets/product-2.png",
        "productImage3": "assets/product-3.png"
      }
    },
    {
      "id": "multi-product-block-v4",
      "name": "Multi-Product Block",
      "version": "v4",
      "section": "Multi-Product Block",
      "tags": [
        "product",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12568",
      "description": "Two slightly-tilted cream cards on yellow bg. Each card has title, body, and a circular food/lifestyle photo. One card has an overlaid product carton + CTA.",
      "file": "multi-product-block-v4/index.html",
      "preview": "multi-product-block-v4/preview.png",
      "width": 600,
      "height": 1226,
      "variables": {
        "frameBackgroundColor": "#F0B504",
        "cardBackgroundColor": "#F5F4EC",
        "cardBorderRadius": 24,
        "titleColor": "#000000",
        "bodyColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC",
        "foodImage1": "assets/cereal-1.png",
        "foodImage2": "assets/cereal-2.png",
        "productImage": "assets/product.png"
      }
    },
    {
      "id": "single-product-block-v4",
      "name": "Single Product Block",
      "version": "v4",
      "section": "Single Product Block",
      "tags": [
        "product",
        "with-image",
        "with-cta",
        "with-rating",
        "social-proof",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12396",
      "description": "Yellow product-feature block. Pill, two-tone headline, star rating, four bulleted benefits, CTA, tilted product carton on the right.",
      "file": "single-product-block-v4/index.html",
      "preview": "single-product-block-v4/preview.png",
      "width": 600,
      "height": 780,
      "variables": {
        "backgroundColor": "#F0B504",
        "pillBackgroundColor": "#000000",
        "pillTextColor": "#F5F4EC",
        "headlineColorPrimary": "#F5F4EC",
        "headlineColorAccent": "#000000",
        "bulletTextColor": "#000000",
        "productImage": "assets/product-photo.png",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "final-cta-block-v1",
      "name": "Final CTA Block",
      "version": "v1",
      "section": "Final CTA Block",
      "tags": [
        "cta",
        "with-cta",
        "multi-line",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12612",
      "description": "Compact yellow CTA block with two-line headline (large black + smaller cream) and a black CTA with cream offset shadow. Use as a closing CTA.",
      "file": "final-cta-block-v1/index.html",
      "preview": "final-cta-block-v1/preview.png",
      "width": 600,
      "height": 351,
      "variables": {
        "backgroundColor": "#F0B504",
        "primaryHeadlineColor": "#000000",
        "secondaryHeadlineColor": "#F5F4EC",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F5F4EC"
      }
    },
    {
      "id": "final-cta-block-v2",
      "name": "Final CTA Block",
      "version": "v2",
      "section": "Final CTA Block",
      "tags": [
        "cta",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12628",
      "description": "Tall block with lifestyle background, a wave divider, and a cream rounded card centring two-line headline + body + black CTA with yellow shadow.",
      "file": "final-cta-block-v2/index.html",
      "preview": "final-cta-block-v2/preview.png",
      "width": 600,
      "height": 867,
      "variables": {
        "backgroundImage": "assets/bg.png",
        "cardBackgroundColor": "#F5F4EC",
        "cardBorderRadius": 15,
        "headlineColor": "#000000",
        "bodyColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F0B504"
      }
    },
    {
      "id": "final-cta-block-v3",
      "name": "Final CTA Block",
      "version": "v3",
      "section": "Final CTA Block",
      "tags": [
        "cta",
        "promo",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12617",
      "description": "Cream block with three tilted food/product photos in the corners, a big Flood Std offer headline (e.g. '50% off'), supporting subhead, and CTA. Promo/sale block.",
      "file": "final-cta-block-v3/index.html",
      "preview": "final-cta-block-v3/preview.png",
      "width": 600,
      "height": 621,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "offerHeadlineColor": "#F0B504",
        "supportingHeadlineColor": "#0E0E0E",
        "bodyColor": "#0E0E0E",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F0B504",
        "foodImage1": "assets/food-1.png",
        "foodImage2": "assets/food-2.png",
        "foodImage3": "assets/food-3.png",
        "productImage": "assets/product.png"
      }
    },
    {
      "id": "final-cta-block-v4",
      "name": "Final CTA Block",
      "version": "v4",
      "section": "Final CTA Block",
      "tags": [
        "cta",
        "with-image",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12636",
      "description": "Lifestyle background with a single cream rounded card centring one big headline + short body + CTA. Cleaner alternative to v2.",
      "file": "final-cta-block-v4/index.html",
      "preview": "final-cta-block-v4/preview.png",
      "width": 600,
      "height": 786,
      "variables": {
        "backgroundImage": "assets/bg.png",
        "cardBackgroundColor": "#F5F4EC",
        "cardBorderRadius": 15,
        "headlineColor": "#000000",
        "bodyColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F0B504"
      }
    },
    {
      "id": "final-cta-block-v5",
      "name": "Final CTA Block",
      "version": "v5",
      "section": "Final CTA Block",
      "tags": [
        "cta",
        "product",
        "with-cta",
        "composed",
        "configurable-copy"
      ],
      "figmaNodeId": "3416:12643",
      "description": "Cream block with three product cartons composed behind/around a centred headline (Montserrat + Flood Std) + body + CTA. Range-launch / product-line block.",
      "file": "final-cta-block-v5/index.html",
      "preview": "final-cta-block-v5/preview.png",
      "width": 600,
      "height": 845,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "headlineColor": "#000000",
        "accentColor": "#000000",
        "ctaBackgroundColor": "#000000",
        "ctaTextColor": "#F5F4EC",
        "ctaShadowColor": "#F0B504",
        "productImage1": "assets/product-1.png",
        "productImage2": "assets/product-2.png",
        "productImage3": "assets/product-3.png"
      }
    },
    {
      "id": "footer-v1",
      "name": "Footer",
      "version": "v1",
      "section": "Footer",
      "tags": [
        "footer",
        "branding",
        "composed",
        "verbatim-copy"
      ],
      "figmaNodeId": "3416:12656",
      "description": "Black footer. Mighty wordmark, social icons row, copyright + unsubscribe.",
      "file": "footer-v1/index.html",
      "preview": "footer-v1/preview.png",
      "width": 600,
      "height": 312,
      "variables": {
        "backgroundColor": "#000000",
        "logoColor": "#F0B504",
        "textColor": "#F5F4EC"
      }
    },
    {
      "id": "footer-v2",
      "name": "Footer",
      "version": "v2",
      "section": "Footer",
      "tags": [
        "footer",
        "branding",
        "composed",
        "verbatim-copy"
      ],
      "figmaNodeId": "3416:12667",
      "description": "Yellow footer. Mighty wordmark, social icons, copyright + unsubscribe — same layout as v1 in brand colours.",
      "file": "footer-v2/index.html",
      "preview": "footer-v2/preview.png",
      "width": 600,
      "height": 312,
      "variables": {
        "backgroundColor": "#F0B504",
        "logoColor": "#000000",
        "textColor": "#000000"
      }
    },
    {
      "id": "footer-v3",
      "name": "Footer",
      "version": "v3",
      "section": "Footer",
      "tags": [
        "footer",
        "branding",
        "composed",
        "verbatim-copy"
      ],
      "figmaNodeId": "3416:12678",
      "description": "Cream footer. Same layout as v1/v2 — softer, used when the preceding block needs separation from a strong colour.",
      "file": "footer-v3/index.html",
      "preview": "footer-v3/preview.png",
      "width": 600,
      "height": 312,
      "variables": {
        "backgroundColor": "#F5F4EC",
        "logoColor": "#000000",
        "textColor": "#000000"
      }
    },
    {
      "id": "logo-strip-block-v1",
      "name": "Logo Strip Block",
      "version": "v1",
      "section": "Logo Strip Block",
      "figmaNodeId": "3416:13690",
      "description": "Cream section with a centered headline + a row of 5 placeholder press/partner logos. Used for 'As seen in' social-proof bands.",
      "file": "logo-strip-block-v1/index.html",
      "preview": "logo-strip-block-v1/preview.png",
      "width": 600,
      "height": 413,
      "tags": [
        "social-proof",
        "branding",
        "configurable-copy"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "headlineColor": "#0E0E0E"
      }
    },
    {
      "id": "quote-block-v1",
      "name": "Quote Block",
      "version": "v1",
      "section": "Quote Block",
      "figmaNodeId": "3416:12741",
      "description": "Black block with a yellow-outlined inner card containing 5 yellow stars, a big uppercase quote, and an @username. Customer-review block.",
      "file": "quote-block-v1/index.html",
      "preview": "quote-block-v1/preview.png",
      "width": 600,
      "height": 446,
      "tags": [
        "social-proof",
        "with-rating",
        "configurable-copy"
      ],
      "variables": {
        "backgroundColor": "#000000",
        "cardBorderColor": "#F0B504",
        "starColor": "#F0B504",
        "quoteColor": "#F5F4EC",
        "authorColor": "#F0B504"
      }
    },
    {
      "id": "selling-points-block-v1",
      "name": "Selling Points Block",
      "version": "v1",
      "section": "Selling Points Block",
      "figmaNodeId": "3416:12988",
      "description": "Light-blue section with three dark-blue rounded cards, each showing an icon + 'Lorem ipsum dolor' label. Trust/feature row.",
      "file": "selling-points-block-v1/index.html",
      "preview": "selling-points-block-v1/preview.png",
      "width": 600,
      "height": 445,
      "tags": [
        "trust",
        "social-proof",
        "configurable-copy"
      ],
      "variables": {
        "backgroundColor": "#81B9E7",
        "cardColor": "#2178BE",
        "iconColor": "#F5F4EC",
        "labelColor": "#F5F4EC"
      }
    },
    {
      "id": "ugc-block-v1",
      "name": "UGC Block",
      "version": "v1",
      "section": "UGC Block",
      "figmaNodeId": "3416:13445",
      "description": "Yellow block with a 2×2 grid of cream cards. Each card has a UGC photo and an @username caption. Social-content block.",
      "file": "ugc-block-v1/index.html",
      "preview": "ugc-block-v1/preview.png",
      "width": 600,
      "height": 842,
      "tags": [
        "social-proof",
        "ugc",
        "with-image",
        "configurable-copy"
      ],
      "variables": {
        "backgroundColor": "#F0B504",
        "cardColor": "#F5F4EC",
        "captionColor": "#000000"
      }
    },
    {
      "id": "ugc-block-v2",
      "name": "Comparison Block",
      "version": "v1",
      "section": "Comparison Block",
      "figmaNodeId": "3416:13543",
      "description": "Nutritional comparison table. 6-row × 4-col table comparing MIGHTY against Cow's Milk and Avg Plant Milk on calcium / sugar / vitamin D / omega-3 / prebiotics.",
      "file": "ugc-block-v2/index.html",
      "preview": "ugc-block-v2/preview.png",
      "width": 600,
      "height": 806,
      "tags": [
        "social-proof",
        "comparison",
        "verbatim-copy"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "highlightColor": "#F0B504",
        "borderColor": "#F0B504"
      }
    },
    {
      "id": "image-grid-block-v1",
      "name": "Image Grid Block",
      "version": "v1",
      "section": "Image Grid Block",
      "figmaNodeId": "3416:12583",
      "description": "Cream block with a 2×3 grid of yellow image placeholders (288px each). Lookbook / category content block.",
      "file": "image-grid-block-v1/index.html",
      "preview": "image-grid-block-v1/preview.png",
      "width": 600,
      "height": 960,
      "tags": [
        "with-image",
        "content"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tileColor": "#F0B504",
        "tileBorderRadius": 24
      }
    },
    {
      "id": "q-and-a-block-v1",
      "name": "Q&A Block",
      "version": "v1",
      "section": "Q&A Block",
      "figmaNodeId": "3416:12690",
      "description": "Yellow block with two slightly-tilted Q&A pairs (black question card on top, cream/sand answer card below with avatar + answer) plus a featured image at the bottom.",
      "file": "q-and-a-block-v1/index.html",
      "preview": "q-and-a-block-v1/preview.png",
      "width": 600,
      "height": 1128,
      "tags": [
        "content",
        "with-image",
        "configurable-copy"
      ],
      "variables": {
        "backgroundColor": "#F0B504",
        "questionBgColor": "#000000",
        "questionLabelColor": "#F5F4EC",
        "questionTextColor": "#F0B504",
        "answerBgColor": "#F5F4EC",
        "answerAltBgColor": "#F4DE9C"
      }
    },
    {
      "id": "selling-points-block-v2",
      "name": "Selling Points Block",
      "version": "v2",
      "section": "Selling Points Block",
      "figmaNodeId": "3416:12911",
      "description": "Four-card 2x2 grid on a yellow Spark background with decorative icons in cream cards.",
      "file": "selling-points-block-v2/index.html",
      "preview": "selling-points-block-v2/preview.png",
      "width": 600,
      "height": 948,
      "tags": [
        "selling-points",
        "grid",
        "icons",
        "yellow"
      ],
      "variables": {
        "backgroundColor": "#F0B504",
        "cardColor": "#F5F4EC",
        "textColor": "#0E0E0E",
        "columns": 2,
        "rows": 2
      }
    },
    {
      "id": "selling-points-block-v3",
      "name": "Selling Points Block",
      "version": "v3",
      "section": "Selling Points Block",
      "figmaNodeId": "3416:13225",
      "description": "Four alternating rows of headline + body copy with tilted photo cards inside a translucent Spark panel.",
      "file": "selling-points-block-v3/index.html",
      "preview": "selling-points-block-v3/preview.png",
      "width": 600,
      "height": 1576,
      "tags": [
        "selling-points",
        "alternating",
        "photos",
        "long-form"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "panelColor": "rgba(240, 181, 4, 0.4)",
        "accentColor": "#F0B504",
        "rows": 4
      }
    },
    {
      "id": "selling-points-block-v4",
      "name": "Selling Points Block",
      "version": "v4",
      "section": "Selling Points Block",
      "figmaNodeId": "3416:13068",
      "description": "Three stacked cream cards with circular icon + headline + body copy on a Spark-tinted background with decorative leaf shapes.",
      "file": "selling-points-block-v4/index.html",
      "preview": "selling-points-block-v4/preview.png",
      "width": 600,
      "height": 952,
      "tags": [
        "selling-points",
        "stacked",
        "icons",
        "cards"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tintOverlay": "rgba(240, 181, 4, 0.5)",
        "cardColor": "#F5F4EC",
        "iconColor": "#F0B504",
        "cards": 3
      }
    },
    {
      "id": "selling-points-block-v5",
      "name": "Selling Points Block",
      "version": "v5",
      "section": "Selling Points Block",
      "figmaNodeId": "3416:13187",
      "description": "Hero-style block with a large headline, three icon-anchored pill labels, and a tilted product photo offset to the right.",
      "file": "selling-points-block-v5/index.html",
      "preview": "selling-points-block-v5/preview.png",
      "width": 600,
      "height": 674,
      "tags": [
        "selling-points",
        "hero",
        "product-photo",
        "pills"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tintOverlay": "rgba(240, 181, 4, 0.5)",
        "pillColor": "#F5F4EC",
        "iconColor": "#F0B504",
        "points": 3
      }
    },
    {
      "id": "quote-block-v2",
      "name": "Quote Block",
      "version": "v2",
      "section": "Quote Block",
      "figmaNodeId": "3416:12746",
      "description": "Compact testimonial with star rating, headline, quote and author next to a circular avatar on a cream background.",
      "file": "quote-block-v2/index.html",
      "preview": "quote-block-v2/preview.png",
      "width": 600,
      "height": 226,
      "tags": [
        "quote",
        "review",
        "compact",
        "avatar"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "starColor": "#F0B504",
        "authorColor": "#F0B504",
        "textColor": "#000000"
      }
    },
    {
      "id": "quote-block-v3",
      "name": "Quote Block",
      "version": "v3",
      "section": "Quote Block",
      "figmaNodeId": "3416:12754",
      "description": "Founder-style pull quote in large uppercase on Spark yellow with an avatar, name + title row and a handwritten accent flourish.",
      "file": "quote-block-v3/index.html",
      "preview": "quote-block-v3/preview.png",
      "width": 600,
      "height": 570,
      "tags": [
        "quote",
        "founder",
        "pull-quote",
        "accent"
      ],
      "variables": {
        "backgroundColor": "#F0B504",
        "textColor": "#000000",
        "accentFont": "Flood Std"
      }
    },
    {
      "id": "quote-block-v4",
      "name": "Quote Block",
      "version": "v4",
      "section": "Quote Block",
      "figmaNodeId": "3416:12761",
      "description": "Two stacked, tilted review cards (yellow + black) over a UGC photo with a tilted product photo decoration to the left.",
      "file": "quote-block-v4/index.html",
      "preview": "quote-block-v4/preview.png",
      "width": 600,
      "height": 958,
      "tags": [
        "quote",
        "reviews",
        "stacked",
        "product-photo"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "card1Color": "#F0B504",
        "card2Color": "#000000",
        "reviews": 2
      }
    },
    {
      "id": "ugc-block-a-v2",
      "name": "UGC Block A",
      "version": "v2",
      "section": "UGC Block",
      "figmaNodeId": "3416:13459",
      "description": "Four tilted polaroid-style UGC photos scattered across a Spark background with two overlaid review cards (cream + Whole blue).",
      "file": "ugc-block-a-v2/index.html",
      "preview": "ugc-block-a-v2/preview.png",
      "width": 600,
      "height": 1389,
      "tags": [
        "ugc",
        "polaroid",
        "reviews",
        "scattered"
      ],
      "variables": {
        "backgroundColor": "#F0B504",
        "polaroidColor": "#F5F4EC",
        "accentReviewColor": "#0098D5",
        "photoCount": 4,
        "reviewCount": 2
      }
    },
    {
      "id": "ugc-block-b-v2",
      "name": "Comparison Block",
      "version": "v2",
      "section": "Comparison Block",
      "figmaNodeId": "3416:13609",
      "description": "Product-vs-competitor comparison. Stacked product photos at top, brush-highlighter titles, six attribute rows separated by brush-stroke dividers, with circular food/ingredient photo decorations.",
      "file": "ugc-block-b-v2/index.html",
      "preview": "ugc-block-b-v2/preview.png",
      "width": 600,
      "height": 1372,
      "tags": [
        "ugc",
        "comparison",
        "table",
        "product"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tintOverlay": "rgba(240, 181, 4, 0.3)",
        "lightCellColor": "#F5F4EC",
        "darkCellColor": "#000000",
        "rows": 6
      }
    },
    {
      "id": "image-grid-block-v2",
      "name": "Image Grid Block",
      "version": "v2",
      "section": "Image Grid Block",
      "figmaNodeId": "3416:12593",
      "description": "Single-row triptych of three equal rounded Spark image tiles on a cream background.",
      "file": "image-grid-block-v2/index.html",
      "preview": "image-grid-block-v2/preview.png",
      "width": 600,
      "height": 332,
      "tags": [
        "image-grid",
        "row",
        "triptych"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tileColor": "#F0B504",
        "columns": 3,
        "rows": 1
      }
    },
    {
      "id": "image-grid-block-v3",
      "name": "Image Grid Block",
      "version": "v3",
      "section": "Image Grid Block",
      "figmaNodeId": "3416:12597",
      "description": "Three-by-three grid of square rounded Spark image tiles on a cream background.",
      "file": "image-grid-block-v3/index.html",
      "preview": "image-grid-block-v3/preview.png",
      "width": 600,
      "height": 600,
      "tags": [
        "image-grid",
        "square",
        "3x3"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "tileColor": "#F0B504",
        "columns": 3,
        "rows": 3
      }
    },
    {
      "id": "q-and-a-block-v2",
      "name": "Q&A Block",
      "version": "v2",
      "section": "Q&A Block",
      "figmaNodeId": "3416:12720",
      "description": "Two tilted Q&A cards with Spark-yellow question bars, followed by a tilted feature image with a Spark border.",
      "file": "q-and-a-block-v2/index.html",
      "preview": "q-and-a-block-v2/preview.png",
      "width": 600,
      "height": 890,
      "tags": [
        "q-and-a",
        "faq",
        "tilted",
        "cards"
      ],
      "variables": {
        "backgroundColor": "#F5F4EC",
        "borderColor": "#F0B504",
        "questionBg": "#F0B504",
        "questionCount": 2
      }
    }
  ],
  "elements": [
    {
      "id": "dividers-01",
      "category": "dividers",
      "name": "Divider_v1",
      "figmaNodeId": "3416:21526",
      "file": "elements/dividers/item-01.svg",
      "thumbnail": "elements/dividers/item-01.svg",
      "description": "Wave divider — full-width brand wave separator."
    },
    {
      "id": "dividers-02",
      "category": "dividers",
      "name": "Divider_v2",
      "figmaNodeId": "3416:21522",
      "file": "elements/dividers/item-02.svg",
      "thumbnail": "elements/dividers/item-02.svg",
      "description": "Vector divider line."
    },
    {
      "id": "highlighters-01",
      "category": "highlighters",
      "name": "Highlighter_v1",
      "figmaNodeId": "3416:21430",
      "file": null,
      "thumbnail": "elements/highlighters/preview.png",
      "description": "Highlighter v1 — two-tone yellow/black stacked badges. Pure CSS (no image asset).",
      "htmlSnippet": "<span style=\"position:relative; display:inline-block; padding:0 4px;\">\n  <span style=\"position:relative; z-index:2; font-family:'Montserrat',sans-serif; font-weight:800; font-size:32px; color:#000;\">highlight word</span>\n  <span style=\"position:absolute; left:0; right:0; bottom:6px; height:14px; background:#F0B504; z-index:1; transform:skew(-2deg);\"></span>\n</span>"
    },
    {
      "id": "highlighters-02",
      "category": "highlighters",
      "name": "Highlighter_v2",
      "figmaNodeId": "3416:21519",
      "file": "elements/highlighters/item-02-mark.svg",
      "thumbnail": "elements/highlighters/preview.png",
      "description": "Highlighter v2 — annotation underline mark (SVG)."
    },
    {
      "id": "highlighters-03",
      "category": "highlighters",
      "name": "Highlighter_v3",
      "figmaNodeId": "3416:21441",
      "file": "elements/highlighters/item-03-mark.svg",
      "thumbnail": "elements/highlighters/preview.png",
      "description": "Highlighter v3 — annotation underline mark (SVG)."
    },
    {
      "id": "components-code-spark",
      "category": "components",
      "name": "Code Stamp (Spark)",
      "figmaNodeId": "3416:12224",
      "file": null,
      "thumbnail": "elements/components/preview.png",
      "description": "Discount code stamp on yellow Spark background. Pure CSS — no image asset.",
      "htmlSnippet": "<div style=\"display:inline-block; padding:14px 32px; background:#F0B504; color:#000; font-family:'Montserrat',sans-serif; font-weight:800; font-size:18px; text-transform:uppercase; letter-spacing:0.5px; border:2px dashed #000; border-radius:8px; text-align:center;\">\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-bottom:2px;\">Use code</span>\n  LOREM IPSUM\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-top:2px;\">for ⅒ off</span>\n</div>"
    },
    {
      "id": "components-code-notmlk",
      "category": "components",
      "name": "Code Stamp (Not MLK)",
      "figmaNodeId": "3416:12228",
      "file": null,
      "thumbnail": "elements/components/preview.png",
      "description": "Discount code stamp on cream Not MLK background. Pure CSS.",
      "htmlSnippet": "<div style=\"display:inline-block; padding:14px 32px; background:#F5F4EC; color:#000; font-family:'Montserrat',sans-serif; font-weight:800; font-size:18px; text-transform:uppercase; letter-spacing:0.5px; border:2px dashed #000; border-radius:8px; text-align:center;\">\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-bottom:2px;\">Use code</span>\n  LOREM IPSUM\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-top:2px;\">for ⅒ off</span>\n</div>"
    },
    {
      "id": "components-code-jet",
      "category": "components",
      "name": "Code Stamp (Jet)",
      "figmaNodeId": "3416:12232",
      "file": null,
      "thumbnail": "elements/components/preview.png",
      "description": "Discount code stamp on black Jet background with yellow border. Pure CSS.",
      "htmlSnippet": "<div style=\"display:inline-block; padding:14px 32px; background:#000; color:#F0B504; font-family:'Montserrat',sans-serif; font-weight:800; font-size:18px; text-transform:uppercase; letter-spacing:0.5px; border:2px dashed #F0B504; border-radius:8px; text-align:center;\">\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-bottom:2px;\">Use code</span>\n  LOREM IPSUM\n  <span style=\"font-size:9px; font-weight:500; display:block; letter-spacing:1px; margin-top:2px;\">for ⅒ off</span>\n</div>"
    },
    {
      "id": "components-offer-stamp-money-back",
      "category": "components",
      "name": "Offer Stamp — Money-back Guarantee",
      "figmaNodeId": "3416:12253",
      "file": "elements/components/offer-stamp-money-back.svg",
      "thumbnail": "elements/components/offer-stamp-money-back.svg",
      "description": "Circular offer stamp — Money-back Guarantee (annotation mark SVG; text rendered separately)."
    },
    {
      "id": "components-offer-stamp-free-shipping",
      "category": "components",
      "name": "Offer Stamp — Free Shipping",
      "figmaNodeId": "3416:12257",
      "file": "elements/components/offer-stamp-free-shipping.svg",
      "thumbnail": "elements/components/offer-stamp-free-shipping.svg",
      "description": "Circular offer stamp — Free Shipping (annotation mark SVG; text rendered separately)."
    },
    {
      "id": "components-offer-stamp-discount",
      "category": "components",
      "name": "Offer Stamp — Discount",
      "figmaNodeId": "3416:12261",
      "file": "elements/components/offer-stamp-discount.svg",
      "thumbnail": "elements/components/offer-stamp-discount.svg",
      "description": "Circular offer stamp — Discount (annotation mark SVG; text rendered separately)."
    },
    {
      "id": "components-signature-george",
      "category": "components",
      "name": "Signature — George Vou",
      "figmaNodeId": "3416:12272",
      "file": "elements/components/signature-george-photo.png",
      "thumbnail": "elements/components/signature-george-photo.png",
      "description": "George Vou signature block — founder photo + name/title + Mighty footer. Photo asset only; logo and footer rendered separately."
    },
    {
      "id": "components-header-center",
      "category": "components",
      "name": "Header — Center",
      "figmaNodeId": "3416:12281",
      "file": "elements/components/logo-group.svg",
      "thumbnail": "elements/components/logo-group.svg",
      "description": "Email header with centered Mighty logo (logo group SVG)."
    },
    {
      "id": "components-header-left",
      "category": "components",
      "name": "Header — Left",
      "figmaNodeId": "3416:12283",
      "file": "elements/components/logo-group.svg",
      "thumbnail": "elements/components/logo-group.svg",
      "description": "Email header with left-aligned Mighty logo (same logo asset)."
    },
    {
      "id": "illustrations-airplane",
      "category": "illustrations",
      "name": "airplane",
      "figmaNodeId": "3416:12071",
      "file": "elements/illustrations/airplane.svg",
      "thumbnail": "elements/illustrations/airplane.svg",
      "description": "airplane illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-alarm-clock",
      "category": "illustrations",
      "name": "alarm-clock",
      "figmaNodeId": "3416:11938",
      "file": "elements/illustrations/alarm-clock.svg",
      "thumbnail": "elements/illustrations/alarm-clock.svg",
      "description": "alarm-clock illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-apple",
      "category": "illustrations",
      "name": "apple",
      "figmaNodeId": "3416:10543",
      "file": "elements/illustrations/apple.svg",
      "thumbnail": "elements/illustrations/apple.svg",
      "description": "apple illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-curved-down-right",
      "category": "illustrations",
      "name": "arrow-curved-down-right",
      "figmaNodeId": "3416:9983",
      "file": "elements/illustrations/arrow-curved-down-right.svg",
      "thumbnail": "elements/illustrations/arrow-curved-down-right.svg",
      "description": "arrow-curved-down-right illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-curved-left",
      "category": "illustrations",
      "name": "arrow-curved-left",
      "figmaNodeId": "3416:9977",
      "file": "elements/illustrations/arrow-curved-left.svg",
      "thumbnail": "elements/illustrations/arrow-curved-left.svg",
      "description": "arrow-curved-left illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-down",
      "category": "illustrations",
      "name": "arrow-down",
      "figmaNodeId": "3416:9996",
      "file": "elements/illustrations/arrow-down.svg",
      "thumbnail": "elements/illustrations/arrow-down.svg",
      "description": "arrow-down illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-left",
      "category": "illustrations",
      "name": "arrow-left",
      "figmaNodeId": "3416:9980",
      "file": "elements/illustrations/arrow-left.svg",
      "thumbnail": "elements/illustrations/arrow-left.svg",
      "description": "arrow-left illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-loop-down-left",
      "category": "illustrations",
      "name": "arrow-loop-down-left",
      "figmaNodeId": "3416:9990",
      "file": "elements/illustrations/arrow-loop-down-left.svg",
      "thumbnail": "elements/illustrations/arrow-loop-down-left.svg",
      "description": "arrow-loop-down-left illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-arrow-zigzag-up",
      "category": "illustrations",
      "name": "arrow-zigzag-up",
      "figmaNodeId": "3416:9974",
      "file": "elements/illustrations/arrow-zigzag-up.svg",
      "thumbnail": "elements/illustrations/arrow-zigzag-up.svg",
      "description": "arrow-zigzag-up illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-badge-100-plant-based",
      "category": "illustrations",
      "name": "badge-100-plant-based",
      "figmaNodeId": "3416:9815",
      "file": "elements/illustrations/badge-100-plant-based.svg",
      "thumbnail": "elements/illustrations/badge-100-plant-based.svg",
      "description": "badge-100-plant-based illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-badge-4g-bcaa",
      "category": "illustrations",
      "name": "badge-4g-bcaa",
      "figmaNodeId": "3416:9835",
      "file": "elements/illustrations/badge-4g-bcaa.svg",
      "thumbnail": "elements/illustrations/badge-4g-bcaa.svg",
      "description": "badge-4g-bcaa illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-badge-high-in-protein",
      "category": "illustrations",
      "name": "badge-high-in-protein",
      "figmaNodeId": "3416:9842",
      "file": "elements/illustrations/badge-high-in-protein.svg",
      "thumbnail": "elements/illustrations/badge-high-in-protein.svg",
      "description": "badge-high-in-protein illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-badge-less-sugar",
      "category": "illustrations",
      "name": "badge-less-sugar",
      "figmaNodeId": "3416:9874",
      "file": "elements/illustrations/badge-less-sugar.svg",
      "thumbnail": "elements/illustrations/badge-less-sugar.svg",
      "description": "badge-less-sugar illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-badge-under-120-calories",
      "category": "illustrations",
      "name": "badge-under-120-calories",
      "figmaNodeId": "3416:9810",
      "file": "elements/illustrations/badge-under-120-calories.svg",
      "thumbnail": "elements/illustrations/badge-under-120-calories.svg",
      "description": "badge-under-120-calories illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-bananas",
      "category": "illustrations",
      "name": "bananas",
      "figmaNodeId": "3416:10256",
      "file": "elements/illustrations/bananas.svg",
      "thumbnail": "elements/illustrations/bananas.svg",
      "description": "bananas illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-banner-ribbon",
      "category": "illustrations",
      "name": "banner-ribbon",
      "figmaNodeId": "3416:12126",
      "file": "elements/illustrations/banner-ribbon.svg",
      "thumbnail": "elements/illustrations/banner-ribbon.svg",
      "description": "banner-ribbon illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-birds-flying",
      "category": "illustrations",
      "name": "birds-flying",
      "figmaNodeId": "3416:12144",
      "file": "elements/illustrations/birds-flying.svg",
      "thumbnail": "elements/illustrations/birds-flying.svg",
      "description": "birds-flying illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-biscuit-mixed",
      "category": "illustrations",
      "name": "biscuit-mixed",
      "figmaNodeId": "3416:11030",
      "file": "elements/illustrations/biscuit-mixed.svg",
      "thumbnail": "elements/illustrations/biscuit-mixed.svg",
      "description": "biscuit-mixed illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-blender",
      "category": "illustrations",
      "name": "blender",
      "figmaNodeId": "3416:10433",
      "file": "elements/illustrations/blender.svg",
      "thumbnail": "elements/illustrations/blender.svg",
      "description": "blender illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-bourbon-biscuit",
      "category": "illustrations",
      "name": "bourbon-biscuit",
      "figmaNodeId": "3416:10823",
      "file": "elements/illustrations/bourbon-biscuit.svg",
      "thumbnail": "elements/illustrations/bourbon-biscuit.svg",
      "description": "bourbon-biscuit illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-bow-and-arrow",
      "category": "illustrations",
      "name": "bow-and-arrow",
      "figmaNodeId": "3416:11740",
      "file": "elements/illustrations/bow-and-arrow.svg",
      "thumbnail": "elements/illustrations/bow-and-arrow.svg",
      "description": "bow-and-arrow illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-brain",
      "category": "illustrations",
      "name": "brain",
      "figmaNodeId": "3416:12182",
      "file": "elements/illustrations/brain.svg",
      "thumbnail": "elements/illustrations/brain.svg",
      "description": "brain illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-bulb",
      "category": "illustrations",
      "name": "bulb",
      "figmaNodeId": "3416:9759",
      "file": "elements/illustrations/bulb.svg",
      "thumbnail": "elements/illustrations/bulb.svg",
      "description": "bulb illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-bunny-ears",
      "category": "illustrations",
      "name": "bunny-ears",
      "figmaNodeId": "3416:11860",
      "file": "elements/illustrations/bunny-ears.svg",
      "thumbnail": "elements/illustrations/bunny-ears.svg",
      "description": "bunny-ears illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-burst-marks",
      "category": "illustrations",
      "name": "burst-marks",
      "figmaNodeId": "3416:9789",
      "file": "elements/illustrations/burst-marks.svg",
      "thumbnail": "elements/illustrations/burst-marks.svg",
      "description": "burst-marks illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-butter-block",
      "category": "illustrations",
      "name": "butter-block",
      "figmaNodeId": "3416:11683",
      "file": "elements/illustrations/butter-block.svg",
      "thumbnail": "elements/illustrations/butter-block.svg",
      "description": "butter-block illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-calendar",
      "category": "illustrations",
      "name": "calendar",
      "figmaNodeId": "3416:10066",
      "file": "elements/illustrations/calendar.svg",
      "thumbnail": "elements/illustrations/calendar.svg",
      "description": "calendar illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-campfire",
      "category": "illustrations",
      "name": "campfire",
      "figmaNodeId": "3416:11786",
      "file": "elements/illustrations/campfire.svg",
      "thumbnail": "elements/illustrations/campfire.svg",
      "description": "campfire illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-candle",
      "category": "illustrations",
      "name": "candle",
      "figmaNodeId": "3416:11973",
      "file": "elements/illustrations/candle.svg",
      "thumbnail": "elements/illustrations/candle.svg",
      "description": "candle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cereal-bowl",
      "category": "illustrations",
      "name": "cereal-bowl",
      "figmaNodeId": "3416:10720",
      "file": "elements/illustrations/cereal-bowl.svg",
      "thumbnail": "elements/illustrations/cereal-bowl.svg",
      "description": "cereal-bowl illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cheese-wedge",
      "category": "illustrations",
      "name": "cheese-wedge",
      "figmaNodeId": "3416:10247",
      "file": "elements/illustrations/cheese-wedge.svg",
      "thumbnail": "elements/illustrations/cheese-wedge.svg",
      "description": "cheese-wedge illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-christmas-tree",
      "category": "illustrations",
      "name": "christmas-tree",
      "figmaNodeId": "3416:11761",
      "file": "elements/illustrations/christmas-tree.svg",
      "thumbnail": "elements/illustrations/christmas-tree.svg",
      "description": "christmas-tree illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-circle",
      "category": "illustrations",
      "name": "circle",
      "figmaNodeId": "3416:10050",
      "file": "elements/illustrations/circle.svg",
      "thumbnail": "elements/illustrations/circle.svg",
      "description": "circle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cloud-puff",
      "category": "illustrations",
      "name": "cloud-puff",
      "figmaNodeId": "3416:12203",
      "file": "elements/illustrations/cloud-puff.svg",
      "thumbnail": "elements/illustrations/cloud-puff.svg",
      "description": "cloud-puff illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cloud",
      "category": "illustrations",
      "name": "cloud",
      "figmaNodeId": "3416:12148",
      "file": "elements/illustrations/cloud.svg",
      "thumbnail": "elements/illustrations/cloud.svg",
      "description": "cloud illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-coffee-beans",
      "category": "illustrations",
      "name": "coffee-beans",
      "figmaNodeId": "3416:11717",
      "file": "elements/illustrations/coffee-beans.svg",
      "thumbnail": "elements/illustrations/coffee-beans.svg",
      "description": "coffee-beans illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-coffee-cup",
      "category": "illustrations",
      "name": "coffee-cup",
      "figmaNodeId": "3416:10613",
      "file": "elements/illustrations/coffee-cup.svg",
      "thumbnail": "elements/illustrations/coffee-cup.svg",
      "description": "coffee-cup illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-coffee-mug",
      "category": "illustrations",
      "name": "coffee-mug",
      "figmaNodeId": "3416:11179",
      "file": "elements/illustrations/coffee-mug.svg",
      "thumbnail": "elements/illustrations/coffee-mug.svg",
      "description": "coffee-mug illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cross",
      "category": "illustrations",
      "name": "cross",
      "figmaNodeId": "3416:9750",
      "file": "elements/illustrations/cross.svg",
      "thumbnail": "elements/illustrations/cross.svg",
      "description": "cross illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-cupcake",
      "category": "illustrations",
      "name": "cupcake",
      "figmaNodeId": "3416:11162",
      "file": "elements/illustrations/cupcake.svg",
      "thumbnail": "elements/illustrations/cupcake.svg",
      "description": "cupcake illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-custard-cream-biscuit",
      "category": "illustrations",
      "name": "custard-cream-biscuit",
      "figmaNodeId": "3416:10843",
      "file": "elements/illustrations/custard-cream-biscuit.svg",
      "thumbnail": "elements/illustrations/custard-cream-biscuit.svg",
      "description": "custard-cream-biscuit illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-digestive-biscuit",
      "category": "illustrations",
      "name": "digestive-biscuit",
      "figmaNodeId": "3416:10954",
      "file": "elements/illustrations/digestive-biscuit.svg",
      "thumbnail": "elements/illustrations/digestive-biscuit.svg",
      "description": "digestive-biscuit illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-dot",
      "category": "illustrations",
      "name": "dot",
      "figmaNodeId": "3416:9717",
      "file": "elements/illustrations/dot.svg",
      "thumbnail": "elements/illustrations/dot.svg",
      "description": "dot illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-easter-bunny",
      "category": "illustrations",
      "name": "easter-bunny",
      "figmaNodeId": "3416:11867",
      "file": "elements/illustrations/easter-bunny.svg",
      "thumbnail": "elements/illustrations/easter-bunny.svg",
      "description": "easter-bunny illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-easter-egg",
      "category": "illustrations",
      "name": "easter-egg",
      "figmaNodeId": "3416:11766",
      "file": "elements/illustrations/easter-egg.svg",
      "thumbnail": "elements/illustrations/easter-egg.svg",
      "description": "easter-egg illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-eggs",
      "category": "illustrations",
      "name": "eggs",
      "figmaNodeId": "3416:10716",
      "file": "elements/illustrations/eggs.svg",
      "thumbnail": "elements/illustrations/eggs.svg",
      "description": "eggs illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-envelope",
      "category": "illustrations",
      "name": "envelope",
      "figmaNodeId": "3416:10022",
      "file": "elements/illustrations/envelope.svg",
      "thumbnail": "elements/illustrations/envelope.svg",
      "description": "envelope illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-flag-england",
      "category": "illustrations",
      "name": "flag-england",
      "figmaNodeId": "3416:10109",
      "file": "elements/illustrations/flag-england.svg",
      "thumbnail": "elements/illustrations/flag-england.svg",
      "description": "flag-england illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-flag-germany",
      "category": "illustrations",
      "name": "flag-germany",
      "figmaNodeId": "3416:10088",
      "file": "elements/illustrations/flag-germany.svg",
      "thumbnail": "elements/illustrations/flag-germany.svg",
      "description": "flag-germany illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-flag-uk",
      "category": "illustrations",
      "name": "flag-uk",
      "figmaNodeId": "3416:10124",
      "file": "elements/illustrations/flag-uk.svg",
      "thumbnail": "elements/illustrations/flag-uk.svg",
      "description": "flag-uk illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-flour-bag",
      "category": "illustrations",
      "name": "flour-bag",
      "figmaNodeId": "3416:10293",
      "file": "elements/illustrations/flour-bag.svg",
      "thumbnail": "elements/illustrations/flour-bag.svg",
      "description": "flour-bag illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-french-fries",
      "category": "illustrations",
      "name": "french-fries",
      "figmaNodeId": "3416:10735",
      "file": "elements/illustrations/french-fries.svg",
      "thumbnail": "elements/illustrations/french-fries.svg",
      "description": "french-fries illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-glass-of-milk",
      "category": "illustrations",
      "name": "glass-of-milk",
      "figmaNodeId": "3416:9935",
      "file": "elements/illustrations/glass-of-milk.svg",
      "thumbnail": "elements/illustrations/glass-of-milk.svg",
      "description": "glass-of-milk illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-glasses",
      "category": "illustrations",
      "name": "glasses",
      "figmaNodeId": "3416:11990",
      "file": "elements/illustrations/glasses.svg",
      "thumbnail": "elements/illustrations/glasses.svg",
      "description": "glasses illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-globe-grid",
      "category": "illustrations",
      "name": "globe-grid",
      "figmaNodeId": "3416:10012",
      "file": "elements/illustrations/globe-grid.svg",
      "thumbnail": "elements/illustrations/globe-grid.svg",
      "description": "globe-grid illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-globe",
      "category": "illustrations",
      "name": "globe",
      "figmaNodeId": "3416:9914",
      "file": "elements/illustrations/globe.svg",
      "thumbnail": "elements/illustrations/globe.svg",
      "description": "globe illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-gravy-boat",
      "category": "illustrations",
      "name": "gravy-boat",
      "figmaNodeId": "3416:10561",
      "file": "elements/illustrations/gravy-boat.svg",
      "thumbnail": "elements/illustrations/gravy-boat.svg",
      "description": "gravy-boat illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-gut-heart",
      "category": "illustrations",
      "name": "gut-heart",
      "figmaNodeId": "3416:12200",
      "file": "elements/illustrations/gut-heart.svg",
      "thumbnail": "elements/illustrations/gut-heart.svg",
      "description": "gut-heart illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-hand-mixer",
      "category": "illustrations",
      "name": "hand-mixer",
      "figmaNodeId": "3416:10398",
      "file": "elements/illustrations/hand-mixer.svg",
      "thumbnail": "elements/illustrations/hand-mixer.svg",
      "description": "hand-mixer illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-handshake",
      "category": "illustrations",
      "name": "handshake",
      "figmaNodeId": "3416:12094",
      "file": "elements/illustrations/handshake.svg",
      "thumbnail": "elements/illustrations/handshake.svg",
      "description": "handshake illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-hearts",
      "category": "illustrations",
      "name": "hearts",
      "figmaNodeId": "3416:11735",
      "file": "elements/illustrations/hearts.svg",
      "thumbnail": "elements/illustrations/hearts.svg",
      "description": "hearts illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-hoodie",
      "category": "illustrations",
      "name": "hoodie",
      "figmaNodeId": "3416:11911",
      "file": "elements/illustrations/hoodie.svg",
      "thumbnail": "elements/illustrations/hoodie.svg",
      "description": "hoodie illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-hot-chocolate",
      "category": "illustrations",
      "name": "hot-chocolate",
      "figmaNodeId": "3416:10581",
      "file": "elements/illustrations/hot-chocolate.svg",
      "thumbnail": "elements/illustrations/hot-chocolate.svg",
      "description": "hot-chocolate illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-kettle",
      "category": "illustrations",
      "name": "kettle",
      "figmaNodeId": "3416:10625",
      "file": "elements/illustrations/kettle.svg",
      "thumbnail": "elements/illustrations/kettle.svg",
      "description": "kettle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-kitchen-scale",
      "category": "illustrations",
      "name": "kitchen-scale",
      "figmaNodeId": "3416:10361",
      "file": "elements/illustrations/kitchen-scale.svg",
      "thumbnail": "elements/illustrations/kitchen-scale.svg",
      "description": "kitchen-scale illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-label-pill",
      "category": "illustrations",
      "name": "label-pill",
      "figmaNodeId": "3416:9756",
      "file": "elements/illustrations/label-pill.svg",
      "thumbnail": "elements/illustrations/label-pill.svg",
      "description": "label-pill illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-label-rectangle",
      "category": "illustrations",
      "name": "label-rectangle",
      "figmaNodeId": "3416:9744",
      "file": "elements/illustrations/label-rectangle.svg",
      "thumbnail": "elements/illustrations/label-rectangle.svg",
      "description": "label-rectangle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-label-rounded",
      "category": "illustrations",
      "name": "label-rounded",
      "figmaNodeId": "3416:9747",
      "file": "elements/illustrations/label-rounded.svg",
      "thumbnail": "elements/illustrations/label-rounded.svg",
      "description": "label-rounded illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-label-speech-bubble",
      "category": "illustrations",
      "name": "label-speech-bubble",
      "figmaNodeId": "3416:9730",
      "file": "elements/illustrations/label-speech-bubble.svg",
      "thumbnail": "elements/illustrations/label-speech-bubble.svg",
      "description": "label-speech-bubble illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-label-square",
      "category": "illustrations",
      "name": "label-square",
      "figmaNodeId": "3416:9762",
      "file": "elements/illustrations/label-square.svg",
      "thumbnail": "elements/illustrations/label-square.svg",
      "description": "label-square illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-latte-art",
      "category": "illustrations",
      "name": "latte-art",
      "figmaNodeId": "3416:11206",
      "file": "elements/illustrations/latte-art.svg",
      "thumbnail": "elements/illustrations/latte-art.svg",
      "description": "latte-art illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-lavender-sprig",
      "category": "illustrations",
      "name": "lavender-sprig",
      "figmaNodeId": "3416:10460",
      "file": "elements/illustrations/lavender-sprig.svg",
      "thumbnail": "elements/illustrations/lavender-sprig.svg",
      "description": "lavender-sprig illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-lightbulb",
      "category": "illustrations",
      "name": "lightbulb",
      "figmaNodeId": "3416:12001",
      "file": "elements/illustrations/lightbulb.svg",
      "thumbnail": "elements/illustrations/lightbulb.svg",
      "description": "lightbulb illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-lightning-bolt-pair",
      "category": "illustrations",
      "name": "lightning-bolt-pair",
      "figmaNodeId": "3416:9799",
      "file": "elements/illustrations/lightning-bolt-pair.svg",
      "thumbnail": "elements/illustrations/lightning-bolt-pair.svg",
      "description": "lightning-bolt-pair illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-lightning-bolt",
      "category": "illustrations",
      "name": "lightning-bolt",
      "figmaNodeId": "3416:9805",
      "file": "elements/illustrations/lightning-bolt.svg",
      "thumbnail": "elements/illustrations/lightning-bolt.svg",
      "description": "lightning-bolt illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-lotus-biscuit",
      "category": "illustrations",
      "name": "lotus-biscuit",
      "figmaNodeId": "3416:10990",
      "file": "elements/illustrations/lotus-biscuit.svg",
      "thumbnail": "elements/illustrations/lotus-biscuit.svg",
      "description": "lotus-biscuit illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-love-letter",
      "category": "illustrations",
      "name": "love-letter",
      "figmaNodeId": "3416:11751",
      "file": "elements/illustrations/love-letter.svg",
      "thumbnail": "elements/illustrations/love-letter.svg",
      "description": "love-letter illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-luggage-pair",
      "category": "illustrations",
      "name": "luggage-pair",
      "figmaNodeId": "3416:11836",
      "file": "elements/illustrations/luggage-pair.svg",
      "thumbnail": "elements/illustrations/luggage-pair.svg",
      "description": "luggage-pair illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-magnifying-glass",
      "category": "illustrations",
      "name": "magnifying-glass",
      "figmaNodeId": "3416:11982",
      "file": "elements/illustrations/magnifying-glass.svg",
      "thumbnail": "elements/illustrations/magnifying-glass.svg",
      "description": "magnifying-glass illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-melon-slice",
      "category": "illustrations",
      "name": "melon-slice",
      "figmaNodeId": "3416:10726",
      "file": "elements/illustrations/melon-slice.svg",
      "thumbnail": "elements/illustrations/melon-slice.svg",
      "description": "melon-slice illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-mighty-logo",
      "category": "illustrations",
      "name": "mighty-logo",
      "figmaNodeId": "3416:9765",
      "file": "elements/illustrations/mighty-logo.svg",
      "thumbnail": "elements/illustrations/mighty-logo.svg",
      "description": "mighty-logo illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-mighty-wordmark",
      "category": "illustrations",
      "name": "mighty-wordmark",
      "figmaNodeId": "3416:9781",
      "file": "elements/illustrations/mighty-wordmark.svg",
      "thumbnail": "elements/illustrations/mighty-wordmark.svg",
      "description": "mighty-wordmark illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-milk-bottle-labeled",
      "category": "illustrations",
      "name": "milk-bottle-labeled",
      "figmaNodeId": "3416:10374",
      "file": "elements/illustrations/milk-bottle-labeled.svg",
      "thumbnail": "elements/illustrations/milk-bottle-labeled.svg",
      "description": "milk-bottle-labeled illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-milk-bottle",
      "category": "illustrations",
      "name": "milk-bottle",
      "figmaNodeId": "3416:9944",
      "file": "elements/illustrations/milk-bottle.svg",
      "thumbnail": "elements/illustrations/milk-bottle.svg",
      "description": "milk-bottle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-milkshake",
      "category": "illustrations",
      "name": "milkshake",
      "figmaNodeId": "3416:10651",
      "file": "elements/illustrations/milkshake.svg",
      "thumbnail": "elements/illustrations/milkshake.svg",
      "description": "milkshake illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-mixing-bowl",
      "category": "illustrations",
      "name": "mixing-bowl",
      "figmaNodeId": "3416:10385",
      "file": "elements/illustrations/mixing-bowl.svg",
      "thumbnail": "elements/illustrations/mixing-bowl.svg",
      "description": "mixing-bowl illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-no-boxes",
      "category": "illustrations",
      "name": "no-boxes",
      "figmaNodeId": "3416:9969",
      "file": "elements/illustrations/no-boxes.svg",
      "thumbnail": "elements/illustrations/no-boxes.svg",
      "description": "no-boxes illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-no-peanut",
      "category": "illustrations",
      "name": "no-peanut",
      "figmaNodeId": "3416:9890",
      "file": "elements/illustrations/no-peanut.svg",
      "thumbnail": "elements/illustrations/no-peanut.svg",
      "description": "no-peanut illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-olive-branch",
      "category": "illustrations",
      "name": "olive-branch",
      "figmaNodeId": "3416:9948",
      "file": "elements/illustrations/olive-branch.svg",
      "thumbnail": "elements/illustrations/olive-branch.svg",
      "description": "olive-branch illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-open-suitcase",
      "category": "illustrations",
      "name": "open-suitcase",
      "figmaNodeId": "3416:12042",
      "file": "elements/illustrations/open-suitcase.svg",
      "thumbnail": "elements/illustrations/open-suitcase.svg",
      "description": "open-suitcase illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-paint-stroke-black",
      "category": "illustrations",
      "name": "paint-stroke-black",
      "figmaNodeId": "",
      "file": "elements/illustrations/paint-stroke-black.svg",
      "thumbnail": "elements/illustrations/paint-stroke-black.svg",
      "description": "paint-stroke-black illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-paint-stroke-cream",
      "category": "illustrations",
      "name": "paint-stroke-cream",
      "figmaNodeId": "",
      "file": "elements/illustrations/paint-stroke-cream.svg",
      "thumbnail": "elements/illustrations/paint-stroke-cream.svg",
      "description": "paint-stroke-cream illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-paint-stroke-yellow",
      "category": "illustrations",
      "name": "paint-stroke-yellow",
      "figmaNodeId": "",
      "file": "elements/illustrations/paint-stroke-yellow.svg",
      "thumbnail": "elements/illustrations/paint-stroke-yellow.svg",
      "description": "paint-stroke-yellow illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pancakes",
      "category": "illustrations",
      "name": "pancakes",
      "figmaNodeId": "3416:10636",
      "file": "elements/illustrations/pancakes.svg",
      "thumbnail": "elements/illustrations/pancakes.svg",
      "description": "pancakes illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-party-popper",
      "category": "illustrations",
      "name": "party-popper",
      "figmaNodeId": "3416:11893",
      "file": "elements/illustrations/party-popper.svg",
      "thumbnail": "elements/illustrations/party-popper.svg",
      "description": "party-popper illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-peach",
      "category": "illustrations",
      "name": "peach",
      "figmaNodeId": "3416:12151",
      "file": "elements/illustrations/peach.svg",
      "thumbnail": "elements/illustrations/peach.svg",
      "description": "peach illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pepper-shaker",
      "category": "illustrations",
      "name": "pepper-shaker",
      "figmaNodeId": "3416:10511",
      "file": "elements/illustrations/pepper-shaker.svg",
      "thumbnail": "elements/illustrations/pepper-shaker.svg",
      "description": "pepper-shaker illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-phone",
      "category": "illustrations",
      "name": "phone",
      "figmaNodeId": "3416:10006",
      "file": "elements/illustrations/phone.svg",
      "thumbnail": "elements/illustrations/phone.svg",
      "description": "phone illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-piggy-bank",
      "category": "illustrations",
      "name": "piggy-bank",
      "figmaNodeId": "3416:10054",
      "file": "elements/illustrations/piggy-bank.svg",
      "thumbnail": "elements/illustrations/piggy-bank.svg",
      "description": "piggy-bank illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pillows",
      "category": "illustrations",
      "name": "pillows",
      "figmaNodeId": "3416:11947",
      "file": "elements/illustrations/pillows.svg",
      "thumbnail": "elements/illustrations/pillows.svg",
      "description": "pillows illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pointing-hand",
      "category": "illustrations",
      "name": "pointing-hand",
      "figmaNodeId": "3416:12015",
      "file": "elements/illustrations/pointing-hand.svg",
      "thumbnail": "elements/illustrations/pointing-hand.svg",
      "description": "pointing-hand illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pomegranate",
      "category": "illustrations",
      "name": "pomegranate",
      "figmaNodeId": "3416:11731",
      "file": "elements/illustrations/pomegranate.svg",
      "thumbnail": "elements/illustrations/pomegranate.svg",
      "description": "pomegranate illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pouring-bottle",
      "category": "illustrations",
      "name": "pouring-bottle",
      "figmaNodeId": "3416:11048",
      "file": "elements/illustrations/pouring-bottle.svg",
      "thumbnail": "elements/illustrations/pouring-bottle.svg",
      "description": "pouring-bottle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pram",
      "category": "illustrations",
      "name": "pram",
      "figmaNodeId": "3416:11798",
      "file": "elements/illustrations/pram.svg",
      "thumbnail": "elements/illustrations/pram.svg",
      "description": "pram illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-puddle",
      "category": "illustrations",
      "name": "puddle",
      "figmaNodeId": "3416:12115",
      "file": "elements/illustrations/puddle.svg",
      "thumbnail": "elements/illustrations/puddle.svg",
      "description": "puddle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-pumpkin",
      "category": "illustrations",
      "name": "pumpkin",
      "figmaNodeId": "3416:11776",
      "file": "elements/illustrations/pumpkin.svg",
      "thumbnail": "elements/illustrations/pumpkin.svg",
      "description": "pumpkin illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-push-pin",
      "category": "illustrations",
      "name": "push-pin",
      "figmaNodeId": "3416:12110",
      "file": "elements/illustrations/push-pin.svg",
      "thumbnail": "elements/illustrations/push-pin.svg",
      "description": "push-pin illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-raspberry",
      "category": "illustrations",
      "name": "raspberry",
      "figmaNodeId": "3416:10819",
      "file": "elements/illustrations/raspberry.svg",
      "thumbnail": "elements/illustrations/raspberry.svg",
      "description": "raspberry illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-ribbon-curl",
      "category": "illustrations",
      "name": "ribbon-curl",
      "figmaNodeId": "3416:12157",
      "file": "elements/illustrations/ribbon-curl.svg",
      "thumbnail": "elements/illustrations/ribbon-curl.svg",
      "description": "ribbon-curl illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-rich-tea-biscuit",
      "category": "illustrations",
      "name": "rich-tea-biscuit",
      "figmaNodeId": "3416:10904",
      "file": "elements/illustrations/rich-tea-biscuit.svg",
      "thumbnail": "elements/illustrations/rich-tea-biscuit.svg",
      "description": "rich-tea-biscuit illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-sailboat",
      "category": "illustrations",
      "name": "sailboat",
      "figmaNodeId": "3416:11854",
      "file": "elements/illustrations/sailboat.svg",
      "thumbnail": "elements/illustrations/sailboat.svg",
      "description": "sailboat illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-salt-pepper-shakers",
      "category": "illustrations",
      "name": "salt-pepper-shakers",
      "figmaNodeId": "3416:10213",
      "file": "elements/illustrations/salt-pepper-shakers.svg",
      "thumbnail": "elements/illustrations/salt-pepper-shakers.svg",
      "description": "salt-pepper-shakers illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-salt-shaker",
      "category": "illustrations",
      "name": "salt-shaker",
      "figmaNodeId": "3416:10481",
      "file": "elements/illustrations/salt-shaker.svg",
      "thumbnail": "elements/illustrations/salt-shaker.svg",
      "description": "salt-shaker illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-seed-bag",
      "category": "illustrations",
      "name": "seed-bag",
      "figmaNodeId": "3416:10276",
      "file": "elements/illustrations/seed-bag.svg",
      "thumbnail": "elements/illustrations/seed-bag.svg",
      "description": "seed-bag illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-shaker-bottle",
      "category": "illustrations",
      "name": "shaker-bottle",
      "figmaNodeId": "3416:9951",
      "file": "elements/illustrations/shaker-bottle.svg",
      "thumbnail": "elements/illustrations/shaker-bottle.svg",
      "description": "shaker-bottle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-shopping-basket",
      "category": "illustrations",
      "name": "shopping-basket",
      "figmaNodeId": "3416:10026",
      "file": "elements/illustrations/shopping-basket.svg",
      "thumbnail": "elements/illustrations/shopping-basket.svg",
      "description": "shopping-basket illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-social-icons",
      "category": "illustrations",
      "name": "social-icons",
      "figmaNodeId": "3416:9999",
      "file": "elements/illustrations/social-icons.svg",
      "thumbnail": "elements/illustrations/social-icons.svg",
      "description": "social-icons illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-stars-five",
      "category": "illustrations",
      "name": "stars-five",
      "figmaNodeId": "3416:10075",
      "file": "elements/illustrations/stars-five.svg",
      "thumbnail": "elements/illustrations/stars-five.svg",
      "description": "stars-five illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-strawberry-smoothie",
      "category": "illustrations",
      "name": "strawberry-smoothie",
      "figmaNodeId": "3416:11075",
      "file": "elements/illustrations/strawberry-smoothie.svg",
      "thumbnail": "elements/illustrations/strawberry-smoothie.svg",
      "description": "strawberry-smoothie illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-strawberry",
      "category": "illustrations",
      "name": "strawberry",
      "figmaNodeId": "3416:10686",
      "file": "elements/illustrations/strawberry.svg",
      "thumbnail": "elements/illustrations/strawberry.svg",
      "description": "strawberry illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-stroke-diagonal",
      "category": "illustrations",
      "name": "stroke-diagonal",
      "figmaNodeId": "3416:9727",
      "file": "elements/illustrations/stroke-diagonal.svg",
      "thumbnail": "elements/illustrations/stroke-diagonal.svg",
      "description": "stroke-diagonal illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-stroke-vertical",
      "category": "illustrations",
      "name": "stroke-vertical",
      "figmaNodeId": "3416:9724",
      "file": "elements/illustrations/stroke-vertical.svg",
      "thumbnail": "elements/illustrations/stroke-vertical.svg",
      "description": "stroke-vertical illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-suitcase",
      "category": "illustrations",
      "name": "suitcase",
      "figmaNodeId": "3416:11805",
      "file": "elements/illustrations/suitcase.svg",
      "thumbnail": "elements/illustrations/suitcase.svg",
      "description": "suitcase illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-teabag",
      "category": "illustrations",
      "name": "teabag",
      "figmaNodeId": "3416:10604",
      "file": "elements/illustrations/teabag.svg",
      "thumbnail": "elements/illustrations/teabag.svg",
      "description": "teabag illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-thumbs-up",
      "category": "illustrations",
      "name": "thumbs-up",
      "figmaNodeId": "3416:10083",
      "file": "elements/illustrations/thumbs-up.svg",
      "thumbnail": "elements/illustrations/thumbs-up.svg",
      "description": "thumbs-up illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-tick",
      "category": "illustrations",
      "name": "tick",
      "figmaNodeId": "3416:9753",
      "file": "elements/illustrations/tick.svg",
      "thumbnail": "elements/illustrations/tick.svg",
      "description": "tick illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-tofu-block",
      "category": "illustrations",
      "name": "tofu-block",
      "figmaNodeId": "3416:11697",
      "file": "elements/illustrations/tofu-block.svg",
      "thumbnail": "elements/illustrations/tofu-block.svg",
      "description": "tofu-block illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-tongue-out",
      "category": "illustrations",
      "name": "tongue-out",
      "figmaNodeId": "3416:9925",
      "file": "elements/illustrations/tongue-out.svg",
      "thumbnail": "elements/illustrations/tongue-out.svg",
      "description": "tongue-out illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-tote-bag",
      "category": "illustrations",
      "name": "tote-bag",
      "figmaNodeId": "3416:11925",
      "file": "elements/illustrations/tote-bag.svg",
      "thumbnail": "elements/illustrations/tote-bag.svg",
      "description": "tote-bag illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-trophy",
      "category": "illustrations",
      "name": "trophy",
      "figmaNodeId": "3416:12027",
      "file": "elements/illustrations/trophy.svg",
      "thumbnail": "elements/illustrations/trophy.svg",
      "description": "trophy illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-uk-map",
      "category": "illustrations",
      "name": "uk-map",
      "figmaNodeId": "3416:10159",
      "file": "elements/illustrations/uk-map.svg",
      "thumbnail": "elements/illustrations/uk-map.svg",
      "description": "uk-map illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-user",
      "category": "illustrations",
      "name": "user",
      "figmaNodeId": "3416:10062",
      "file": "elements/illustrations/user.svg",
      "thumbnail": "elements/illustrations/user.svg",
      "description": "user illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-water-bottle",
      "category": "illustrations",
      "name": "water-bottle",
      "figmaNodeId": "3416:12065",
      "file": "elements/illustrations/water-bottle.svg",
      "thumbnail": "elements/illustrations/water-bottle.svg",
      "description": "water-bottle illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-watering-can",
      "category": "illustrations",
      "name": "watering-can",
      "figmaNodeId": "3416:12129",
      "file": "elements/illustrations/watering-can.svg",
      "thumbnail": "elements/illustrations/watering-can.svg",
      "description": "watering-can illustration from Mighty Figma library."
    },
    {
      "id": "illustrations-whisk",
      "category": "illustrations",
      "name": "whisk",
      "figmaNodeId": "3416:10415",
      "file": "elements/illustrations/whisk.svg",
      "thumbnail": "elements/illustrations/whisk.svg",
      "description": "whisk illustration from Mighty Figma library."
    }
  ],
  "photos": [
    {
      "id": "product-barista-mlk-back",
      "category": "product",
      "name": "Barista MLK — Back",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/barista-mlk-back.png",
      "thumbnail": "photos/product/barista-mlk-back.png",
      "description": "Transparent cut-out · Barista MLK · back view.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "product-barista-mlk-front",
      "category": "product",
      "name": "Barista MLK — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/barista-mlk-front.png",
      "thumbnail": "photos/product/barista-mlk-front.png",
      "description": "Transparent cut-out · Barista MLK · front view.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "product-barista-mlk-side",
      "category": "product",
      "name": "Barista MLK — Side",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/barista-mlk-side.png",
      "thumbnail": "photos/product/barista-mlk-side.png",
      "description": "Transparent cut-out · Barista MLK · side view.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "product-kids-mlk-back",
      "category": "product",
      "name": "Kids MLK — Back",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/kids-mlk-back.png",
      "thumbnail": "photos/product/kids-mlk-back.png",
      "description": "Transparent cut-out · Kids MLK · back view.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "product-kids-mlk-front",
      "category": "product",
      "name": "Kids MLK — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/kids-mlk-front.png",
      "thumbnail": "photos/product/kids-mlk-front.png",
      "description": "Transparent cut-out · Kids MLK · front view.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "product-kids-mlk-side",
      "category": "product",
      "name": "Kids MLK — Side",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/kids-mlk-side.png",
      "thumbnail": "photos/product/kids-mlk-side.png",
      "description": "Transparent cut-out · Kids MLK · side view.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "product-pea-mlk-back",
      "category": "product",
      "name": "Pea MLK — Back",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/pea-mlk-back.png",
      "thumbnail": "photos/product/pea-mlk-back.png",
      "description": "Transparent cut-out · Pea MLK · back view.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "product-pea-mlk-front",
      "category": "product",
      "name": "Pea MLK — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/pea-mlk-front.png",
      "thumbnail": "photos/product/pea-mlk-front.png",
      "description": "Transparent cut-out · Pea MLK · front view.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "product-pea-mlk-side",
      "category": "product",
      "name": "Pea MLK — Side",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/pea-mlk-side.png",
      "thumbnail": "photos/product/pea-mlk-side.png",
      "description": "Transparent cut-out · Pea MLK · side view.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "product-ultimate-caramel-powder-front",
      "category": "product",
      "name": "Ultimate Caramel Powder — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/ultimate-caramel-powder-front.png",
      "thumbnail": "photos/product/ultimate-caramel-powder-front.png",
      "description": "Transparent cut-out · Ultimate Caramel Powder · front view.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "product-ultimate-chocolate-powder-front",
      "category": "product",
      "name": "Ultimate Chocolate Powder — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/ultimate-chocolate-powder-front.png",
      "thumbnail": "photos/product/ultimate-chocolate-powder-front.png",
      "description": "Transparent cut-out · Ultimate Chocolate Powder · front view.",
      "products": [
        "Ultimate Chocolate Powder"
      ]
    },
    {
      "id": "product-ultimate-super-berry-powder-front",
      "category": "product",
      "name": "Ultimate Super Berry Powder — Front",
      "figmaNodeId": "3416:21528",
      "file": "photos/product/ultimate-super-berry-powder-front.png",
      "thumbnail": "photos/product/ultimate-super-berry-powder-front.png",
      "description": "Transparent cut-out · Ultimate Super Berry Powder · front view.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "ai-ugc-01",
      "category": "ai-ugc",
      "name": "AI UGC #01",
      "figmaNodeId": "3416:12285",
      "file": "photos/ai-ugc/photo-01.png",
      "thumbnail": "photos/ai-ugc/photo-01.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-02",
      "category": "ai-ugc",
      "name": "AI UGC #02",
      "figmaNodeId": "3416:12304",
      "file": "photos/ai-ugc/photo-02.png",
      "thumbnail": "photos/ai-ugc/photo-02.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-03",
      "category": "ai-ugc",
      "name": "AI UGC #03",
      "figmaNodeId": "3416:12322",
      "file": "photos/ai-ugc/photo-03.png",
      "thumbnail": "photos/ai-ugc/photo-03.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-04",
      "category": "ai-ugc",
      "name": "AI UGC #04",
      "figmaNodeId": "3416:12340",
      "file": "photos/ai-ugc/photo-04.png",
      "thumbnail": "photos/ai-ugc/photo-04.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-05",
      "category": "ai-ugc",
      "name": "AI UGC #05",
      "figmaNodeId": "3416:12289",
      "file": "photos/ai-ugc/photo-05.png",
      "thumbnail": "photos/ai-ugc/photo-05.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-06",
      "category": "ai-ugc",
      "name": "AI UGC #06",
      "figmaNodeId": "3416:12308",
      "file": "photos/ai-ugc/photo-06.png",
      "thumbnail": "photos/ai-ugc/photo-06.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-07",
      "category": "ai-ugc",
      "name": "AI UGC #07",
      "figmaNodeId": "3416:12326",
      "file": "photos/ai-ugc/photo-07.png",
      "thumbnail": "photos/ai-ugc/photo-07.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "ai-ugc-08",
      "category": "ai-ugc",
      "name": "AI UGC #08",
      "figmaNodeId": "3416:12344",
      "file": "photos/ai-ugc/photo-08.png",
      "thumbnail": "photos/ai-ugc/photo-08.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "ai-ugc-09",
      "category": "ai-ugc",
      "name": "AI UGC #09",
      "figmaNodeId": "3416:12296",
      "file": "photos/ai-ugc/photo-09.png",
      "thumbnail": "photos/ai-ugc/photo-09.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-10",
      "category": "ai-ugc",
      "name": "AI UGC #10",
      "figmaNodeId": "3416:12315",
      "file": "photos/ai-ugc/photo-10.png",
      "thumbnail": "photos/ai-ugc/photo-10.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Ultimate Chocolate Powder"
      ]
    },
    {
      "id": "ai-ugc-11",
      "category": "ai-ugc",
      "name": "AI UGC #11",
      "figmaNodeId": "3416:12333",
      "file": "photos/ai-ugc/photo-11.png",
      "thumbnail": "photos/ai-ugc/photo-11.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Ultimate Chocolate Powder"
      ]
    },
    {
      "id": "ai-ugc-12",
      "category": "ai-ugc",
      "name": "AI UGC #12",
      "figmaNodeId": "3416:12351",
      "file": "photos/ai-ugc/photo-12.png",
      "thumbnail": "photos/ai-ugc/photo-12.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "ai-ugc-13",
      "category": "ai-ugc",
      "name": "AI UGC #13",
      "figmaNodeId": "3416:12293",
      "file": "photos/ai-ugc/photo-13.png",
      "thumbnail": "photos/ai-ugc/photo-13.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-14",
      "category": "ai-ugc",
      "name": "AI UGC #14",
      "figmaNodeId": "3416:12301",
      "file": "photos/ai-ugc/photo-14.png",
      "thumbnail": "photos/ai-ugc/photo-14.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-15",
      "category": "ai-ugc",
      "name": "AI UGC #15",
      "figmaNodeId": "3416:12312",
      "file": "photos/ai-ugc/photo-15.png",
      "thumbnail": "photos/ai-ugc/photo-15.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-16",
      "category": "ai-ugc",
      "name": "AI UGC #16",
      "figmaNodeId": "3416:12319",
      "file": "photos/ai-ugc/photo-16.png",
      "thumbnail": "photos/ai-ugc/photo-16.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-17",
      "category": "ai-ugc",
      "name": "AI UGC #17",
      "figmaNodeId": "3416:12330",
      "file": "photos/ai-ugc/photo-17.png",
      "thumbnail": "photos/ai-ugc/photo-17.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-18",
      "category": "ai-ugc",
      "name": "AI UGC #18",
      "figmaNodeId": "3416:12337",
      "file": "photos/ai-ugc/photo-18.png",
      "thumbnail": "photos/ai-ugc/photo-18.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-19",
      "category": "ai-ugc",
      "name": "AI UGC #19",
      "figmaNodeId": "3416:12348",
      "file": "photos/ai-ugc/photo-19.png",
      "thumbnail": "photos/ai-ugc/photo-19.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-ugc-20",
      "category": "ai-ugc",
      "name": "AI UGC #20",
      "figmaNodeId": "3416:12294",
      "file": "photos/ai-ugc/photo-20.png",
      "thumbnail": "photos/ai-ugc/photo-20.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-21",
      "category": "ai-ugc",
      "name": "AI UGC #21",
      "figmaNodeId": "3416:12302",
      "file": "photos/ai-ugc/photo-21.png",
      "thumbnail": "photos/ai-ugc/photo-21.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-22",
      "category": "ai-ugc",
      "name": "AI UGC #22",
      "figmaNodeId": "3416:12313",
      "file": "photos/ai-ugc/photo-22.png",
      "thumbnail": "photos/ai-ugc/photo-22.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-23",
      "category": "ai-ugc",
      "name": "AI UGC #23",
      "figmaNodeId": "3416:12320",
      "file": "photos/ai-ugc/photo-23.png",
      "thumbnail": "photos/ai-ugc/photo-23.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-24",
      "category": "ai-ugc",
      "name": "AI UGC #24",
      "figmaNodeId": "3416:12331",
      "file": "photos/ai-ugc/photo-24.png",
      "thumbnail": "photos/ai-ugc/photo-24.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-25",
      "category": "ai-ugc",
      "name": "AI UGC #25",
      "figmaNodeId": "3416:12338",
      "file": "photos/ai-ugc/photo-25.png",
      "thumbnail": "photos/ai-ugc/photo-25.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-26",
      "category": "ai-ugc",
      "name": "AI UGC #26",
      "figmaNodeId": "3416:12349",
      "file": "photos/ai-ugc/photo-26.png",
      "thumbnail": "photos/ai-ugc/photo-26.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-ugc-27",
      "category": "ai-ugc",
      "name": "AI UGC #27",
      "figmaNodeId": "3416:12356",
      "file": "photos/ai-ugc/photo-27.png",
      "thumbnail": "photos/ai-ugc/photo-27.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-28",
      "category": "ai-ugc",
      "name": "AI UGC #28",
      "figmaNodeId": "3416:12295",
      "file": "photos/ai-ugc/photo-28.png",
      "thumbnail": "photos/ai-ugc/photo-28.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-29",
      "category": "ai-ugc",
      "name": "AI UGC #29",
      "figmaNodeId": "3416:12303",
      "file": "photos/ai-ugc/photo-29.png",
      "thumbnail": "photos/ai-ugc/photo-29.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-30",
      "category": "ai-ugc",
      "name": "AI UGC #30",
      "figmaNodeId": "3416:12314",
      "file": "photos/ai-ugc/photo-30.png",
      "thumbnail": "photos/ai-ugc/photo-30.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-31",
      "category": "ai-ugc",
      "name": "AI UGC #31",
      "figmaNodeId": "3416:12321",
      "file": "photos/ai-ugc/photo-31.png",
      "thumbnail": "photos/ai-ugc/photo-31.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-32",
      "category": "ai-ugc",
      "name": "AI UGC #32",
      "figmaNodeId": "3416:12332",
      "file": "photos/ai-ugc/photo-32.png",
      "thumbnail": "photos/ai-ugc/photo-32.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-33",
      "category": "ai-ugc",
      "name": "AI UGC #33",
      "figmaNodeId": "3416:12339",
      "file": "photos/ai-ugc/photo-33.png",
      "thumbnail": "photos/ai-ugc/photo-33.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-34",
      "category": "ai-ugc",
      "name": "AI UGC #34",
      "figmaNodeId": "3416:12350",
      "file": "photos/ai-ugc/photo-34.png",
      "thumbnail": "photos/ai-ugc/photo-34.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-ugc-35",
      "category": "ai-ugc",
      "name": "AI UGC #35",
      "figmaNodeId": "3416:12355",
      "file": "photos/ai-ugc/photo-35.png",
      "thumbnail": "photos/ai-ugc/photo-35.png",
      "description": "AI-generated UGC-style lifestyle photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-01",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #01",
      "figmaNodeId": "3416:12286",
      "file": "photos/ai-lifestyle/photo-01.png",
      "thumbnail": "photos/ai-lifestyle/photo-01.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK",
        "Pea MLK",
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-02",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #02",
      "figmaNodeId": "3416:12290",
      "file": "photos/ai-lifestyle/photo-02.png",
      "thumbnail": "photos/ai-lifestyle/photo-02.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-03",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #03",
      "figmaNodeId": "3416:12297",
      "file": "photos/ai-lifestyle/photo-03.png",
      "thumbnail": "photos/ai-lifestyle/photo-03.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-04",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #04",
      "figmaNodeId": "3416:12305",
      "file": "photos/ai-lifestyle/photo-04.png",
      "thumbnail": "photos/ai-lifestyle/photo-04.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-05",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #05",
      "figmaNodeId": "3416:12309",
      "file": "photos/ai-lifestyle/photo-05.png",
      "thumbnail": "photos/ai-lifestyle/photo-05.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-06",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #06",
      "figmaNodeId": "3416:12316",
      "file": "photos/ai-lifestyle/photo-06.png",
      "thumbnail": "photos/ai-lifestyle/photo-06.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-07",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #07",
      "figmaNodeId": "3416:12323",
      "file": "photos/ai-lifestyle/photo-07.png",
      "thumbnail": "photos/ai-lifestyle/photo-07.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-08",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #08",
      "figmaNodeId": "3416:12327",
      "file": "photos/ai-lifestyle/photo-08.png",
      "thumbnail": "photos/ai-lifestyle/photo-08.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-09",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #09",
      "figmaNodeId": "3416:12334",
      "file": "photos/ai-lifestyle/photo-09.png",
      "thumbnail": "photos/ai-lifestyle/photo-09.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-10",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #10",
      "figmaNodeId": "3416:12341",
      "file": "photos/ai-lifestyle/photo-10.png",
      "thumbnail": "photos/ai-lifestyle/photo-10.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "ai-lifestyle-11",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #11",
      "figmaNodeId": "3416:12345",
      "file": "photos/ai-lifestyle/photo-11.png",
      "thumbnail": "photos/ai-lifestyle/photo-11.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-12",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #12",
      "figmaNodeId": "3416:12352",
      "file": "photos/ai-lifestyle/photo-12.png",
      "thumbnail": "photos/ai-lifestyle/photo-12.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-13",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #13",
      "figmaNodeId": "3416:12287",
      "file": "photos/ai-lifestyle/photo-13.png",
      "thumbnail": "photos/ai-lifestyle/photo-13.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-14",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #14",
      "figmaNodeId": "3416:12291",
      "file": "photos/ai-lifestyle/photo-14.png",
      "thumbnail": "photos/ai-lifestyle/photo-14.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-15",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #15",
      "figmaNodeId": "3416:12299",
      "file": "photos/ai-lifestyle/photo-15.png",
      "thumbnail": "photos/ai-lifestyle/photo-15.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-16",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #16",
      "figmaNodeId": "3416:12306",
      "file": "photos/ai-lifestyle/photo-16.png",
      "thumbnail": "photos/ai-lifestyle/photo-16.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-17",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #17",
      "figmaNodeId": "3416:12310",
      "file": "photos/ai-lifestyle/photo-17.png",
      "thumbnail": "photos/ai-lifestyle/photo-17.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-18",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #18",
      "figmaNodeId": "3416:12318",
      "file": "photos/ai-lifestyle/photo-18.png",
      "thumbnail": "photos/ai-lifestyle/photo-18.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-19",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #19",
      "figmaNodeId": "3416:12324",
      "file": "photos/ai-lifestyle/photo-19.png",
      "thumbnail": "photos/ai-lifestyle/photo-19.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-20",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #20",
      "figmaNodeId": "3416:12328",
      "file": "photos/ai-lifestyle/photo-20.png",
      "thumbnail": "photos/ai-lifestyle/photo-20.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-21",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #21",
      "figmaNodeId": "3416:12336",
      "file": "photos/ai-lifestyle/photo-21.png",
      "thumbnail": "photos/ai-lifestyle/photo-21.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-22",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #22",
      "figmaNodeId": "3416:12342",
      "file": "photos/ai-lifestyle/photo-22.png",
      "thumbnail": "photos/ai-lifestyle/photo-22.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-23",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #23",
      "figmaNodeId": "3416:12346",
      "file": "photos/ai-lifestyle/photo-23.png",
      "thumbnail": "photos/ai-lifestyle/photo-23.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-24",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #24",
      "figmaNodeId": "3416:12353",
      "file": "photos/ai-lifestyle/photo-24.png",
      "thumbnail": "photos/ai-lifestyle/photo-24.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-25",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #25",
      "figmaNodeId": "3416:12288",
      "file": "photos/ai-lifestyle/photo-25.png",
      "thumbnail": "photos/ai-lifestyle/photo-25.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-26",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #26",
      "figmaNodeId": "3416:12292",
      "file": "photos/ai-lifestyle/photo-26.png",
      "thumbnail": "photos/ai-lifestyle/photo-26.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-27",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #27",
      "figmaNodeId": "3416:12298",
      "file": "photos/ai-lifestyle/photo-27.png",
      "thumbnail": "photos/ai-lifestyle/photo-27.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-28",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #28",
      "figmaNodeId": "3416:12300",
      "file": "photos/ai-lifestyle/photo-28.png",
      "thumbnail": "photos/ai-lifestyle/photo-28.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-29",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #29",
      "figmaNodeId": "3416:12307",
      "file": "photos/ai-lifestyle/photo-29.png",
      "thumbnail": "photos/ai-lifestyle/photo-29.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK",
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-30",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #30",
      "figmaNodeId": "3416:12311",
      "file": "photos/ai-lifestyle/photo-30.png",
      "thumbnail": "photos/ai-lifestyle/photo-30.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-31",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #31",
      "figmaNodeId": "3416:12317",
      "file": "photos/ai-lifestyle/photo-31.png",
      "thumbnail": "photos/ai-lifestyle/photo-31.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-32",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #32",
      "figmaNodeId": "3416:12325",
      "file": "photos/ai-lifestyle/photo-32.png",
      "thumbnail": "photos/ai-lifestyle/photo-32.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-33",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #33",
      "figmaNodeId": "3416:12329",
      "file": "photos/ai-lifestyle/photo-33.png",
      "thumbnail": "photos/ai-lifestyle/photo-33.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK",
        "Pea MLK",
        "Kids MLK"
      ]
    },
    {
      "id": "ai-lifestyle-34",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #34",
      "figmaNodeId": "3416:12335",
      "file": "photos/ai-lifestyle/photo-34.png",
      "thumbnail": "photos/ai-lifestyle/photo-34.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "ai-lifestyle-35",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #35",
      "figmaNodeId": "3416:12343",
      "file": "photos/ai-lifestyle/photo-35.png",
      "thumbnail": "photos/ai-lifestyle/photo-35.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "ai-lifestyle-36",
      "category": "ai-lifestyle",
      "name": "AI Lifestyle #36",
      "figmaNodeId": "3416:12347",
      "file": "photos/ai-lifestyle/photo-36.png",
      "thumbnail": "photos/ai-lifestyle/photo-36.png",
      "description": "AI-generated lifestyle/editorial photo.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-berry-01",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #01",
      "figmaNodeId": "3416:21541",
      "file": "photos/brand-lifestyle/berry-01.png",
      "thumbnail": "photos/brand-lifestyle/berry-01.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-02",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #02",
      "figmaNodeId": "3416:21544",
      "file": "photos/brand-lifestyle/berry-02.png",
      "thumbnail": "photos/brand-lifestyle/berry-02.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-03",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #03",
      "figmaNodeId": "3416:21547",
      "file": "photos/brand-lifestyle/berry-03.png",
      "thumbnail": "photos/brand-lifestyle/berry-03.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-04",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #04",
      "figmaNodeId": "3416:21551",
      "file": "photos/brand-lifestyle/berry-04.png",
      "thumbnail": "photos/brand-lifestyle/berry-04.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-05",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #05",
      "figmaNodeId": "3416:21554",
      "file": "photos/brand-lifestyle/berry-05.png",
      "thumbnail": "photos/brand-lifestyle/berry-05.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-06",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #06",
      "figmaNodeId": "3416:21560",
      "file": "photos/brand-lifestyle/berry-06.png",
      "thumbnail": "photos/brand-lifestyle/berry-06.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-07",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #07",
      "figmaNodeId": "3416:21563",
      "file": "photos/brand-lifestyle/berry-07.png",
      "thumbnail": "photos/brand-lifestyle/berry-07.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-08",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #08",
      "figmaNodeId": "3416:21569",
      "file": "photos/brand-lifestyle/berry-08.png",
      "thumbnail": "photos/brand-lifestyle/berry-08.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-berry-09",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Super Berry #09",
      "figmaNodeId": "3416:21572",
      "file": "photos/brand-lifestyle/berry-09.png",
      "thumbnail": "photos/brand-lifestyle/berry-09.png",
      "description": "Brand lifestyle photography for Ultimate Super Berry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-01",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #01",
      "figmaNodeId": "3416:21542",
      "file": "photos/brand-lifestyle/strawberry-01.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-01.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-02",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #02",
      "figmaNodeId": "3416:21552",
      "file": "photos/brand-lifestyle/strawberry-02.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-02.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-03",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #03",
      "figmaNodeId": "3416:21557",
      "file": "photos/brand-lifestyle/strawberry-03.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-03.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-04",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #04",
      "figmaNodeId": "3416:21561",
      "file": "photos/brand-lifestyle/strawberry-04.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-04.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-05",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #05",
      "figmaNodeId": "3416:21566",
      "file": "photos/brand-lifestyle/strawberry-05.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-05.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-06",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #06",
      "figmaNodeId": "3416:21570",
      "file": "photos/brand-lifestyle/strawberry-06.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-06.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-strawberry-07",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Strawberry #07",
      "figmaNodeId": "3416:21575",
      "file": "photos/brand-lifestyle/strawberry-07.png",
      "thumbnail": "photos/brand-lifestyle/strawberry-07.png",
      "description": "Brand lifestyle photography for Ultimate Strawberry.",
      "products": [
        "Ultimate Super Berry Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-01",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #01",
      "figmaNodeId": "3416:21545",
      "file": "photos/brand-lifestyle/salted-caramel-01.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-01.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-02",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #02",
      "figmaNodeId": "3416:21548",
      "file": "photos/brand-lifestyle/salted-caramel-02.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-02.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-03",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #03",
      "figmaNodeId": "3416:21549",
      "file": "photos/brand-lifestyle/salted-caramel-03.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-03.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-04",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #04",
      "figmaNodeId": "3416:21555",
      "file": "photos/brand-lifestyle/salted-caramel-04.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-04.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-05",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #05",
      "figmaNodeId": "3416:21558",
      "file": "photos/brand-lifestyle/salted-caramel-05.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-05.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-06",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #06",
      "figmaNodeId": "3416:21559",
      "file": "photos/brand-lifestyle/salted-caramel-06.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-06.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-07",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #07",
      "figmaNodeId": "3416:21564",
      "file": "photos/brand-lifestyle/salted-caramel-07.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-07.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-08",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #08",
      "figmaNodeId": "3416:21568",
      "file": "photos/brand-lifestyle/salted-caramel-08.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-08.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-09",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #09",
      "figmaNodeId": "3416:21573",
      "file": "photos/brand-lifestyle/salted-caramel-09.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-09.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-salted-caramel-10",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Ultimate Salted Caramel #10",
      "figmaNodeId": "3416:21577",
      "file": "photos/brand-lifestyle/salted-caramel-10.png",
      "thumbnail": "photos/brand-lifestyle/salted-caramel-10.png",
      "description": "Brand lifestyle photography for Ultimate Salted Caramel.",
      "products": [
        "Ultimate Salted Caramel Powder"
      ]
    },
    {
      "id": "brand-lifestyle-barista-01",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #01",
      "figmaNodeId": "3416:21543",
      "file": "photos/brand-lifestyle/barista-01.png",
      "thumbnail": "photos/brand-lifestyle/barista-01.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-02",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #02",
      "figmaNodeId": "3416:21546",
      "file": "photos/brand-lifestyle/barista-02.png",
      "thumbnail": "photos/brand-lifestyle/barista-02.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-03",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #03",
      "figmaNodeId": "3416:21550",
      "file": "photos/brand-lifestyle/barista-03.png",
      "thumbnail": "photos/brand-lifestyle/barista-03.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-04",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #04",
      "figmaNodeId": "3416:21553",
      "file": "photos/brand-lifestyle/barista-04.png",
      "thumbnail": "photos/brand-lifestyle/barista-04.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-05",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #05",
      "figmaNodeId": "3416:21556",
      "file": "photos/brand-lifestyle/barista-05.png",
      "thumbnail": "photos/brand-lifestyle/barista-05.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-06",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #06",
      "figmaNodeId": "3416:21562",
      "file": "photos/brand-lifestyle/barista-06.png",
      "thumbnail": "photos/brand-lifestyle/barista-06.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-07",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #07",
      "figmaNodeId": "3416:21565",
      "file": "photos/brand-lifestyle/barista-07.png",
      "thumbnail": "photos/brand-lifestyle/barista-07.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-08",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #08",
      "figmaNodeId": "3416:21567",
      "file": "photos/brand-lifestyle/barista-08.png",
      "thumbnail": "photos/brand-lifestyle/barista-08.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-09",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #09",
      "figmaNodeId": "3416:21571",
      "file": "photos/brand-lifestyle/barista-09.png",
      "thumbnail": "photos/brand-lifestyle/barista-09.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-10",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #10",
      "figmaNodeId": "3416:21574",
      "file": "photos/brand-lifestyle/barista-10.png",
      "thumbnail": "photos/brand-lifestyle/barista-10.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-barista-11",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Barista MLK #11",
      "figmaNodeId": "3416:21576",
      "file": "photos/brand-lifestyle/barista-11.png",
      "thumbnail": "photos/brand-lifestyle/barista-11.png",
      "description": "Brand lifestyle photography for Barista MLK.",
      "products": [
        "Barista MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-01",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #01",
      "figmaNodeId": "3416:21578",
      "file": "photos/brand-lifestyle/pea-mlk-01.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-01.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-02",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #02",
      "figmaNodeId": "3416:21579",
      "file": "photos/brand-lifestyle/pea-mlk-02.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-02.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-03",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #03",
      "figmaNodeId": "3416:21580",
      "file": "photos/brand-lifestyle/pea-mlk-03.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-03.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-04",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #04",
      "figmaNodeId": "3416:21581",
      "file": "photos/brand-lifestyle/pea-mlk-04.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-04.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-05",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #05",
      "figmaNodeId": "3416:21582",
      "file": "photos/brand-lifestyle/pea-mlk-05.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-05.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-06",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #06",
      "figmaNodeId": "3416:21583",
      "file": "photos/brand-lifestyle/pea-mlk-06.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-06.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-07",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #07",
      "figmaNodeId": "3416:21584",
      "file": "photos/brand-lifestyle/pea-mlk-07.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-07.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-08",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #08",
      "figmaNodeId": "3416:21585",
      "file": "photos/brand-lifestyle/pea-mlk-08.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-08.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-09",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #09",
      "figmaNodeId": "3416:21586",
      "file": "photos/brand-lifestyle/pea-mlk-09.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-09.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-10",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #10",
      "figmaNodeId": "3416:21587",
      "file": "photos/brand-lifestyle/pea-mlk-10.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-10.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-11",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #11",
      "figmaNodeId": "3416:21588",
      "file": "photos/brand-lifestyle/pea-mlk-11.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-11.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-12",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #12",
      "figmaNodeId": "3416:21589",
      "file": "photos/brand-lifestyle/pea-mlk-12.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-12.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-13",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #13",
      "figmaNodeId": "3416:21590",
      "file": "photos/brand-lifestyle/pea-mlk-13.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-13.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-14",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #14",
      "figmaNodeId": "3416:21591",
      "file": "photos/brand-lifestyle/pea-mlk-14.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-14.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-15",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #15",
      "figmaNodeId": "3416:21592",
      "file": "photos/brand-lifestyle/pea-mlk-15.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-15.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-16",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #16",
      "figmaNodeId": "3416:21593",
      "file": "photos/brand-lifestyle/pea-mlk-16.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-16.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-17",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #17",
      "figmaNodeId": "3416:21594",
      "file": "photos/brand-lifestyle/pea-mlk-17.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-17.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-18",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #18",
      "figmaNodeId": "3416:21595",
      "file": "photos/brand-lifestyle/pea-mlk-18.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-18.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-19",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #19",
      "figmaNodeId": "3416:21596",
      "file": "photos/brand-lifestyle/pea-mlk-19.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-19.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-20",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #20",
      "figmaNodeId": "3416:21597",
      "file": "photos/brand-lifestyle/pea-mlk-20.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-20.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-21",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #21",
      "figmaNodeId": "3416:21598",
      "file": "photos/brand-lifestyle/pea-mlk-21.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-21.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-22",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #22",
      "figmaNodeId": "3416:21599",
      "file": "photos/brand-lifestyle/pea-mlk-22.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-22.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    },
    {
      "id": "brand-lifestyle-pea-mlk-23",
      "category": "brand-lifestyle",
      "name": "Brand Lifestyle — Unsweetened Pea MLK #23",
      "figmaNodeId": "3416:21600",
      "file": "photos/brand-lifestyle/pea-mlk-23.png",
      "thumbnail": "photos/brand-lifestyle/pea-mlk-23.png",
      "description": "Brand lifestyle photography for Unsweetened Pea MLK.",
      "products": [
        "Pea MLK"
      ]
    }
  ],
  "photoCategories": [
    {
      "id": "ai-ugc",
      "label": "AI UGC",
      "figmaNodeId": "3431:21606",
      "description": "AI-generated UGC-style lifestyle photos."
    },
    {
      "id": "ai-lifestyle",
      "label": "AI Lifestyle",
      "figmaNodeId": "3431:21607",
      "description": "AI-generated brand lifestyle photos."
    },
    {
      "id": "brand-lifestyle",
      "label": "Brand Lifestyle",
      "figmaNodeId": "3431:21608",
      "description": "Brand-shot lifestyle photography."
    },
    {
      "id": "product",
      "label": "Product",
      "figmaNodeId": "3416:21528",
      "description": "Transparent product cut-out photography per SKU."
    }
  ],
  "elementCategories": [
    {
      "id": "dividers",
      "label": "Dividers"
    },
    {
      "id": "illustrations",
      "label": "Illustrations"
    },
    {
      "id": "highlighters",
      "label": "Highlighters"
    },
    {
      "id": "components",
      "label": "Components"
    }
  ],
  "tagVocabulary": {
    "section": [
      "Final CTA Block",
      "Footer",
      "Hero Section",
      "Image Grid Block",
      "Logo Strip Block",
      "Multi-Product Block",
      "Q&A Block",
      "Quote Block",
      "Selling Points Block",
      "Single Product Block",
      "Text Block",
      "Top Strip",
      "UGC Block",
      "User-Generated Content Block (Comparison)",
      "User-Generated Content Block (Photo)"
    ]
  },
  "photoProducts": [
    "Barista MLK",
    "Kids MLK",
    "Pea MLK",
    "Ultimate Super Berry Powder",
    "Ultimate Chocolate Powder",
    "Ultimate Salted Caramel Powder"
  ],
  "pageRules": {
    "foundation": {
      "label": "Foundation rules",
      "intro": "How to use the brand-locked atoms. Combine these correctly and any block on top stays on-brand.",
      "rules": [
        {
          "id": "colours-proportion",
          "title": "Honour the 50/40/10 ratio",
          "body": "Across any composition: Not M.L.K. 50%, Jet 40%, Spark 10%. Spark is an accent — never the dominant surface for a whole email or block."
        },
        {
          "id": "colours-product-lock",
          "title": "One product palette per block",
          "body": "When using a product-line colour (Milk / Protein / Shakes / Ice Cream), pick ONE SKU and stay there. Never mix product palettes inside a single block."
        },
        {
          "id": "colours-contrast",
          "title": "Always pair Spark with Jet text",
          "body": "Yellow Spark surfaces always carry Jet (black) text and Jet button shadows — never cream-on-yellow."
        },
        {
          "id": "fonts-only-two",
          "title": "Two fonts. Full stop.",
          "body": "Only Montserrat and Flood. Don't substitute other faces, even if Figma source files reference them — that's stale data."
        },
        {
          "id": "fonts-flood-rule",
          "title": "Flood is INSIDE headlines only",
          "body": "Flood appears as 1–3 uppercase words inside a Montserrat headline. Never as standalone body text, never below 48px, never paired with body Montserrat copy."
        },
        {
          "id": "fonts-uppercase",
          "title": "Headlines are UPPERCASE",
          "body": "All Montserrat headlines (H1–H6) render uppercase. Body and captions stay sentence-case."
        },
        {
          "id": "buttons-cta-default",
          "title": "Body / Jet is the default CTA",
          "body": "Use Body / Jet for the primary CTA in any block. Switch to Body / Unsweetened only for high-emphasis promo blocks (sale, launch). Spark is for dark or busy surfaces."
        },
        {
          "id": "buttons-shadow",
          "title": "Shadow direction is fixed",
          "body": "Offset shadow is always (-6px, 6px). Spark buttons flip the shadow to Jet (black); all other buttons use Not M.L.K. (cream)."
        },
        {
          "id": "buttons-size-match",
          "title": "Match button size to its block",
          "body": "Hero buttons (bigger) go in Hero blocks. Body buttons (smaller) go in body content. Don't mix — the size pairs with where it sits."
        },
        {
          "id": "logos-tilt",
          "title": "Logo is always tilted 10.5°",
          "body": "Non-negotiable. Apply the rotation to the whole logo group, never to individual letters."
        },
        {
          "id": "logos-colors",
          "title": "Logo colours are locked",
          "body": "Logo only appears in Jet, Not M.L.K., or Spark. Never any other colour. Never on a non-brand background."
        },
        {
          "id": "logos-primary",
          "title": "Primary > Secondary",
          "body": "Default to Primary (with sparkles). Switch to Secondary only when the sparkles won't fit (cramped headers, tight signatures)."
        },
        {
          "id": "top-strip-optional",
          "title": "Top strip is optional",
          "body": "Many emails open with a tickertape phrase (e.g. \"BEYOND THE MUG · BEYOND THE MUG · BEYOND THE MUG\"), but it's not always repeated and not every email needs one. Use it when it earns its place — skip it otherwise."
        },
        {
          "id": "highlighters-for-emphasis",
          "title": "Use Highlighters for emphasis",
          "body": "To emphasise a word or short phrase inside body copy, use a Highlighter element (Highlighter_v1/v2/v3 on the Elements page). Don't recolour or restyle text by hand — pick the existing highlighter."
        },
        {
          "id": "product-palette-as-accent",
          "title": "Product palettes are accent surfaces",
          "body": "Pea M.lk orange and Kids M.lk blue (and other product-line colours) appear as one or two block-level surfaces inside an email — never as the email-level background. Spark, Not M.L.K., and Jet are the email-level surfaces."
        }
      ]
    },
    "blocks": {
      "label": "Email Blocks rules",
      "intro": "How to compose an email from blocks. AI agents should follow this stack order when assembling a new email.",
      "rules": [
        {
          "id": "stack-order",
          "title": "Canonical stack order",
          "body": "Top Strip → Hero → content blocks (Text, Single/Multi-Product, Selling Points, Quote, UGC, Image Grid, Logo Strip, Q&A) → Final CTA → Footer. Always in that vertical order."
        },
        {
          "id": "one-hero",
          "title": "One Hero per email",
          "body": "Use exactly one Hero block at the top. Never stack two heroes. Skip the Hero only for transactional emails (order confirmation, receipt)."
        },
        {
          "id": "footer-mandatory",
          "title": "Footer is always last",
          "body": "Every email ends with a Footer (v1, v2, or v3). Never omit. Pick footer colour to give visual separation from the previous block."
        },
        {
          "id": "block-limit",
          "title": "Cap content blocks at 6",
          "body": "Total stack should be ≤ 8 blocks (Top Strip + Hero + ~5 content + Final CTA + Footer). Longer emails kill mobile attention."
        },
        {
          "id": "one-product",
          "title": "One product per email",
          "body": "Don't mix product lines in one email. Stick to a single SKU's palette and use only blocks that match (e.g. Single Product Block for one SKU, Multi-Product Block when the email is genuinely about the whole range)."
        },
        {
          "id": "ratings-source",
          "title": "Social proof needs real attribution",
          "body": "Quote/UGC blocks need a real @username or initials. Don't invent reviewers. Pull from approved UGC photo set if needed."
        },
        {
          "id": "final-cta-clear",
          "title": "Final CTA must drive ONE action",
          "body": "One CTA, one action. No multi-button stacks. The Final CTA Block headline should restate the action verb (\"Bookmark\", \"Shop now\", \"Get the link\")."
        },
        {
          "id": "ugc-pairs",
          "title": "UGC + Quote stack well",
          "body": "When you want strong social proof, stack UGC Block (photo grid) followed by Quote Block (single-quote). Don't use two UGC blocks back-to-back."
        },
        {
          "id": "before-after",
          "title": "Before & After is for comparison",
          "body": "Use the Comparison/Before-After block only when you're contrasting MIGHTY vs an alternative (cow's milk, another plant milk). Not for product feature lists."
        },
        {
          "id": "image-grid-use",
          "title": "Image Grid for lookbooks",
          "body": "Use Image Grid when an email needs lifestyle/recipe variety (Brand Lifestyle photos). Don't use it for product cut-outs — use Multi-Product Block for those."
        }
      ]
    },
    "elements": {
      "label": "Elements rules",
      "intro": "How to use the graphic libraries inside blocks. Don't stack elements as blocks themselves — they're supporting graphics.",
      "rules": [
        {
          "id": "bg-full-bleed",
          "title": "Backgrounds: full-bleed only",
          "body": "Use a Background SVG as the full-block background. Never as a partial overlay. Either it covers the whole block, or you don't use it."
        },
        {
          "id": "dividers-sparing",
          "title": "Dividers: sparingly",
          "body": "One divider per email at most, and only between two blocks of very different colour. Most blocks already carry their own colour boundary."
        },
        {
          "id": "illustrations-pair",
          "title": "Illustrations support copy",
          "body": "Use Illustrations alongside text, never as a substitute. Size: 24–48px next to a heading, 64–120px as a standalone accent. Always in Jet on a light surface, Not M.L.K. on dark."
        },
        {
          "id": "highlighters-rule",
          "title": "Highlighters only behind Montserrat",
          "body": "Brushy highlight underlines sit behind 1–3 Montserrat-ExtraBold words. Never highlight Flood text (Flood is already the emphasis), never highlight body copy."
        },
        {
          "id": "components-atomic",
          "title": "Components are atomic",
          "body": "Offer Codes / Offer Stamps / Sender Header are pre-built atomic components. Use them as-is. Don't recombine pieces into new shapes — the brand has approved these compositions only."
        },
        {
          "id": "stamp-use",
          "title": "One stamp at a time",
          "body": "Money-Back / Free Shipping / 30%-Off stamps are designed as standalone trust marks. Show one per block. Never line up all three side-by-side as a strip."
        },
        {
          "id": "elements-color",
          "title": "Recolour via fill or filter",
          "body": "Most element SVGs use a fill variable so colour can be swapped. When inlining: control colour with CSS. When using as an image: apply a brand-colour filter, never a non-brand colour."
        }
      ]
    },
    "photos": {
      "label": "Photos rules",
      "intro": "How to choose and use photography. These rules apply to AI-generated photos especially — quality bar is the same.",
      "rules": [
        {
          "id": "match-sku",
          "title": "Match the photo to the SKU",
          "body": "Every photo in an email should feature the SKU the email is about. Use the product filter on this page to pull the right set. Don't decorate a Pea MLK email with Barista photos."
        },
        {
          "id": "crop-faces",
          "title": "Always crop faces",
          "body": "Person photos must crop the face — partial in frame, shot from an angle, or eyes-engaged-with-product. Never a full head-on portrait."
        },
        {
          "id": "crop-product",
          "title": "Crop product cartons in lifestyle",
          "body": "In lifestyle shots, carton edges can run off-frame to feel candid. Stock-photography centred cartons on flat backgrounds are forbidden."
        },
        {
          "id": "no-ai-faces",
          "title": "AI photos: no synthetic faces",
          "body": "AI UGC and AI Lifestyle photos must obscure or partially crop any face. Never publish AI content where a generated face is the focal subject."
        },
        {
          "id": "real-shadows",
          "title": "Strong, real shadows",
          "body": "Use photos with confident, real shadows. Top-down bottle shots especially need a strong under-shadow for depth. Avoid soft, flat lighting."
        },
        {
          "id": "bg-match-product",
          "title": "Product backgrounds match the SKU",
          "body": "Product photography sits on its own colour identity — Pea on green, Barista on dark, Berry on red. Never on a clashing accent."
        },
        {
          "id": "neutral-bg-pop",
          "title": "Lifestyle: neutral with a pop",
          "body": "Lifestyle backgrounds are real kitchens / real outdoors. One brand-colour pop in frame (mug, tea towel, mat) — never a fully colour-graded shot."
        },
        {
          "id": "product-cutout-shadow",
          "title": "Cut-outs need drop-shadow",
          "body": "When using a Product cut-out (transparent PNG) inside a block, always apply a drop-shadow filter (e.g. drop-shadow(0 16px 24px rgba(0,0,0,0.18))) so it sits in the layout, not floats."
        },
        {
          "id": "no-mix-products",
          "title": "Don't mix products in one block",
          "body": "Same as the block rule, but for photos: a single block should show one SKU's photography. Multi-Product Block is the only exception (one card per SKU)."
        },
        {
          "id": "ugc-feels-candid",
          "title": "UGC must feel candid",
          "body": "UGC photos should look mid-sip, mid-laugh, in-hand. Posed-and-styled photography goes in Brand Lifestyle, not UGC."
        }
      ]
    }
  }
};
