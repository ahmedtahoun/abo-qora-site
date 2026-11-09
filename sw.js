/* Abo Qora service worker — makes the site installable and quick to open.
   Pages and scripts: network first, so every deploy shows up immediately;
   the cached copy is only used when the phone is offline.
   Images and fonts: served from cache, refreshed in the background. */
const VERSION = 'aq-v2';
const SHELL = ['/', '/index.html', '/data.js', '/kids.js', '/manifest.json', '/assets/logo_circle.jpg', '/assets/icons/icon-192.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isStatic = (url) =>
  /\.(?:jpg|jpeg|png|webp|svg|woff2?)$/i.test(url.pathname) ||
  url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com';

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !isStatic(url)) return;

  if (isStatic(url)) {
    // stale-while-revalidate
    e.respondWith(
      caches.open(VERSION).then(async (c) => {
        const hit = await c.match(req);
        const net = fetch(req).then((r) => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
        return hit || net;
      }),
    );
    return;
  }

  // network first (HTML, data.js, manifest)
  e.respondWith(
    fetch(req)
      .then((r) => {
        if (r.ok) { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return r;
      })
      .catch(async () => (await caches.match(req, { ignoreSearch: true })) || caches.match('/index.html')),
  );
});
