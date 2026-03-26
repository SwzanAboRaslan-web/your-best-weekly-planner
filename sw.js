/* ═══════════════════════════════════════════════
   مخططي الأسبوعي — Service Worker v2
   ✅ Offline Persistence  ✅ Background Sync
   ✅ Push Notifications   ✅ Smart Caching
═══════════════════════════════════════════════ */

const CACHE_NAME  = 'wplanner-v2';
const OFFLINE_URL = './index.html';

const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

/* ── Install ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: تنظيف الكاش القديم ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: استراتيجية ذكية ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (
    url.hostname.includes('firebaseio.com')          ||
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('googleapis.com')           ||
    url.hostname.includes('gstatic.com')              ||
    url.hostname.includes('identitytoolkit')          ||
    url.hostname.includes('securetoken')
  ) return;
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch { return caches.match(OFFLINE_URL); }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(res => {
    if (res.ok) cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return cached || fetchPromise || caches.match(OFFLINE_URL);
}

/* ── Background Sync ── */
self.addEventListener('sync', event => {
  if (event.tag === 'sync-planner') {
    event.waitUntil(
      self.clients.matchAll({ type:'window', includeUncontrolled:true })
        .then(list => { list.forEach(c => c.postMessage({ type:'SYNC_NOW' })); })
    );
  }
});

/* ── Push Notifications ── */
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'مخططي', {
      body: data.body||'', icon:'./icons/icon-192.png',
      badge:'./icons/icon-72.png', tag: data.tag||'wplanner',
      data: data.url||'./', dir:'rtl',
      actions:[{action:'open',title:'فتح'},{action:'dismiss',title:'إغلاق'}]
    })
  );
});

/* ── Notification Click ── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  event.waitUntil(
    clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      return clients.openWindow(event.notification.data || './');
    })
  );
});

/* ── Messages ── */
self.addEventListener('message', event => {
  if (!event.data) return;
  switch(event.data.type) {
    case 'SHOW_NOTIFICATION':
      event.waitUntil(
        self.registration.showNotification(event.data.title||'مخططي', {
          body: event.data.body||'', tag: event.data.tag||'wplanner-'+Date.now(),
          icon: event.data.icon||'./icons/icon-192.png',
          badge: event.data.badge||'./icons/icon-72.png',
          dir: event.data.dir||'auto', requireInteraction:false,
          actions:[{action:'open',title:'فتح'},{action:'dismiss',title:'إغلاق'}]
        })
      );
      break;
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
    case 'REGISTER_SYNC':
      if (self.registration.sync) {
        event.waitUntil(self.registration.sync.register('sync-planner'));
      }
      break;
  }
});
