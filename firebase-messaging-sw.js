importScripts('https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCl9xOzUawqggpwyZQupGYm67RiWT42b7A",
  authDomain: "lol-messenger-76286.firebaseapp.com",
  projectId: "lol-messenger-76286",
  storageBucket: "lol-messenger-76286.firebasestorage.app",
  messagingSenderId: "573143866457",
  appId: "1:573143866457:web:fb7ed67ea66848e6da2548"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '💬 LOL Messenger';
  const options = {
    body: payload.notification?.body || 'Новое сообщение',
    icon: 'https://iili.io/BWM0dg4.md.png',
    badge: 'https://iili.io/BWMNdRs.jpg',
    data: { chatId: payload.data?.chatId },
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
