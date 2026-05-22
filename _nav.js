// Mighty Brand DB — shared nav bar
// Usage: <body data-page="foundation"> ... <div id="nav"></div>
(function () {
  const pages = [
    { id: 'foundation', label: 'Foundation', url: 'foundation.html' },
    { id: 'blocks',     label: 'Email Blocks', url: 'blocks.html' },
    { id: 'elements',   label: 'Elements',   url: 'elements.html' },
    { id: 'photos',     label: 'Photos',     url: 'photos.html' }
  ];

  const current = document.body.dataset.page || '';

  const nav = document.createElement('nav');
  nav.className = 'global-nav';
  nav.innerHTML = `
    <a class="brand" href="foundation.html"><span class="dot"></span>Mighty Brand DB</a>
    <div class="links">
      ${pages.map(p => `<a href="${p.url}" class="${p.id === current ? 'active' : ''}">${p.label}</a>`).join('')}
    </div>
    <div class="meta">
      Figma · <a href="https://www.figma.com/design/LSIR0XK4mGRknacXEx7KyC/Mighty---Lifecycle?node-id=3399-8388" target="_blank">3399:8388</a> · 2026-05-21
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
})();
