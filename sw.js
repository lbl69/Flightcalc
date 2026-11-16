// Cache hors ligne : on sert le cache tout de suite, puis on le met à jour en arrière-plan.
const CACHE = 'flightcalc-v5';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('./index.html') : undefined);
    const net = fetch(req).then(r => {
      // Polices Google incluses (réponses opaques) pour garder la typo hors ligne.
      if (r.ok || r.type === 'opaque') c.put(req, r.clone());
      return r;
    }).catch(() => hit || Response.error());
    if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
    return net;
  }));
});
