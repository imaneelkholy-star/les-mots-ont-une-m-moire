'use strict';
const prefix = 'hi3d-memory-pwa:' + new URL(self.registration.scope).pathname + ':';
const cacheName = prefix + 'v6';
const files = ["hi3d-ensuque-prononciation.wav", "hi3d-game.js", "hi3d-icon-180.png", "hi3d-icon-192.png", "hi3d-icon-512.png", "hi3d-install.js", "hi3d-lisez-moi.txt", "hi3d-manifest.webmanifest", "hi3d-memory.html", "hi3d-style.css"];
const urls = files.map(file => new URL(file, self.registration.scope).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(prefix) && key !== cacheName).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const clean = new URL(event.request.url); clean.search = ''; clean.hash = '';
  if (!urls.includes(clean.href)) return;
  event.respondWith(caches.open(cacheName).then(async cache => {
    const saved = await cache.match(clean.href);
    return saved || fetch(event.request);
  }));
});
