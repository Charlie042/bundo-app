// try {
//   importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
//   importScripts(
//     "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js"
//   );

//   const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
//   };

//   firebase.initializeApp(firebaseConfig);

//   const messaging = firebase.messaging();

//   messaging.onBackgroundMessage((payload) => {
//     console.log("Received background message:", payload);

//     const notificationTitle = payload.notification?.title || "New Message";
//     const notificationOptions = {
//       body: payload.notification?.body || "You have a new message", 
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });
// } catch (error) {
//   console.error("Error in firebase-messaging-sw.js:", error);
// }
