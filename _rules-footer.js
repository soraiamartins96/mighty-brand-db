// Mighty Brand DB — page-specific rules footer
(function () {
  const db = window.__MIGHTY_DB;
  if (!db || !db.pageRules) return;

  const page = document.body.dataset.page || '';
  const pageRules = db.pageRules[page];
  if (!pageRules) return;

  const footer = document.createElement('footer');
  footer.className = 'rules-footer';
  footer.innerHTML = `
    <div class="rules-inner">
      <div class="rules-head">
        <h2>${pageRules.label}</h2>
        <p>${pageRules.intro}</p>
      </div>
      <ul class="rules-list">
        ${pageRules.rules.map(r => `
          <li>
            <div class="rule-title">${r.title}</div>
            <div class="rule-body">${r.body}</div>
          </li>
        `).join('')}
      </ul>
      <div class="rules-meta">
        For AI agents: page rules live at <code>window.__MIGHTY_DB.pageRules.${page}.rules</code> (array of <code>{id, title, body}</code>).
        Apply only the rules from the page you're working with.
      </div>
    </div>
  `;
  document.body.appendChild(footer);
})();
