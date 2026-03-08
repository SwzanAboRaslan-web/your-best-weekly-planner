/* ═══════════════════════════════════════════════
   مخططي الأسبوعي — Service Worker
   Strategy: Cache-First for assets, Network-First for Firebase
═══════════════════════════════════════════════ */

const CACHE_NAME    = 'wplanner-v1';
const OFFLINE_URL   = './index.html';

// Files to cache immediately on install
const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

/* ── Install: pre-cache core files ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch: Smart caching strategy ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET and Firebase/Google API requests → always network
  if (event.request.method !== 'GET') return;
  if (
    url.hostname.includes('firebaseio.com')    ||
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('googleapis.com')    ||
    url.hostname.includes('gstatic.com')       ||
    url.hostname.includes('identitytoolkit')   ||
    url.hostname.includes('securetoken')
  ) return;

  // Google Fonts → cache-first (rarely changes)
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // App shell (index.html) → stale-while-revalidate
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // Everything else → cache-first with network fallback
  event.respondWith(cacheFirst(event.request));
});

/* ── Cache Strategies ── */

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
  } catch {
    return caches.match(OFFLINE_URL);
  }
}

async function staleWhileRevalidate(request) {
  const cache    = await caches.open(CACHE_NAME);
  const cached   = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || fetchPromise || caches.match(OFFLINE_URL);
}

/* ── Push Notifications (from server, future use) ── */
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || '📅 مخططي', {
      body:    data.body    || '',
      icon:    './icons/icon-192.png',
      badge:   './icons/icon-72.png',
      tag:     data.tag     || 'wplanner',
      data:    data.url     || './',
      actions: [
        { action: 'open',    title: 'فتح التطبيق' },
        { action: 'dismiss', title: 'إغلاق' }
      ]
    })
  );
});

/* ── Notification Click ── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url.includes('index.html') && 'focus' in client) {
            return client.focus();
          }
        }
        return clients.openWindow(event.notification.data || './');
      })
  );
});

/* ── Background Sync (future: sync when back online) ── */
self.addEventListener('sync', event => {
  if (event.tag === 'sync-planner') {
    event.waitUntil(
      // Data is already in localStorage, Firebase syncs on next open
      Promise.resolve()
    );
  }
});
