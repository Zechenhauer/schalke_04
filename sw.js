// Service Worker ohne festes Logo (verwendet Standard-System-Symbol)
self.addEventListener('push', function(event) {
    let data = { title: '⚽ Fußball-Alarm', body: 'Es gibt ein neues Update!' };
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        vibrate: [200, 100, 200]
        // icon und badge wurden entfernt, damit keine alten Logos hängen bleiben
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./')
    );
});
