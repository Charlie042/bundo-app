"use client";

import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from "firebase/messaging";

let messaging: Messaging | null = null;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export function getMessagingInstance(): Messaging | null {
  if (typeof window !== "undefined") {
    try {
      const app = initializeApp(firebaseConfig);
      messaging = getMessaging(app);
      return messaging;
    } catch (error) {
      console.error("Error initializing messaging:", error);
      return null;
    }
  }
  return null;
}

export { messaging };
