// Service Worker for Web Push Notifications
// CLP & HK Electric Monitor

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/')
  );
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});