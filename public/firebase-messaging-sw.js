try {
  importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
  importScripts(
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js"
  );

  const firebaseConfig = {
    apiKey: "AIzaSyBP-jnVFlYK9RjNiCmHVJ3OEDBuRZfaU6Q",
    authDomain: "crypto-moon-448409-k6.firebaseapp.com",
    projectId: "crypto-moon-448409-k6",
    storageBucket: "crypto-moon-448409-k6.firebasestorage.app",
    messagingSenderId: "699177267701",
    appId: "1:699177267701:web:48f0febf1d63ca42c430bc",
    measurementId: "G-SEFWMKPD7F",
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log("Received background message:", payload);

    const notificationTitle = payload.notification?.title || "New Message";
    const notificationOptions = {
      body: payload.notification?.body || "You have a new message",
      icon: "/icons/icon-192x192.png", // Path to your notification icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
} catch (error) {
  console.error("Error in firebase-messaging-sw.js:", error);
}
