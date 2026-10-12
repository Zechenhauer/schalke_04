// Service Worker für die Push-Benachrichtigungen der 2. Bundesliga-App
self.addEventListener('push', function(event) {
    let data = { title: '⚽ 2. Bundesliga Tor-Alarm!', body: 'Es ist ein neues Tor gefallen!' };
    
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.body,
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%232ea043%22/><text x=%2250%22 y=%2263%22 font-size=%2230%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22 font-family=%22sans-serif%22>OLDB</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%232ea043%22/><text x=%2250%22 y=%2263%22 font-size=%2230%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22 font-family=%22sans-serif%22>OLDB</text></svg>',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});