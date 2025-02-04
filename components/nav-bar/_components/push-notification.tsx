"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, BellOff } from "lucide-react";
import {
  getToken,
  deleteToken,
  onMessage,
  Messaging,
} from "firebase/messaging";
import { getMessagingInstance } from "@/utils/firebase/firebase";
import { toast } from "sonner";

const NotificationToggle = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [messaging, setMessaging] = useState<Messaging | null>(null);

  useEffect(() => {
    const initMessaging = async () => {
      const messagingInstance = getMessagingInstance();
      if (messagingInstance) {
        setMessaging(messagingInstance);
        await initializeNotifications(messagingInstance);
      }
      setLoading(false);
    };

    if (typeof window !== "undefined") {
      initMessaging();
    }
  }, []);

  const initializeNotifications = async (messagingInstance: Messaging) => {
    try {
      if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register("/firebase-messaging-sw.js");
      }

      if (Notification.permission === "granted") {
        const currentToken = await getToken(messagingInstance, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
        });

        if (currentToken) {
          setToken(currentToken);
          setIsSubscribed(true);
        }
      }
    } catch (error) {
      console.error("Error initializing notifications:", error);
    }
  };

  const handleTokenCleanup = async () => {
    try {
      if (token && messaging) {
        const success = await deleteToken(messaging);
        if (success) {
          setToken(null);
          setIsSubscribed(false);
        }
      }
    } catch (error) {
      console.error("Error cleaning up token:", error);
    }
  };

  const handleToggle = async () => {
    if (!messaging) return;

    try {
      setLoading(true);

      if (!isSubscribed) {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          const newToken = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
          });

          if (newToken) {
            setToken(newToken);
            console.log(newToken)
            toast.success("Notifications Enabled");
            setIsSubscribed(true);
          } else {
            toast.error("Failed to enable notifications");
          }
        } else {
          toast.error("Permission denied");
        }
      } else {
        await handleTokenCleanup();
        toast.success("Notifications disabled");
      }
    } catch (error) {
      console.error("Error toggling notifications:", error);
      toast.error("Failed to toggle notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!messaging) return;

    const unsubscribe = onMessage(messaging, (payload) => {
      const { title, body } = payload.notification || {};
      if (title) {
        toast.info(title, { description: body });
      }
    });

    return () => {
      unsubscribe();
      if (token) {
        handleTokenCleanup();
      }
    };
  }, [messaging, token]);

  if (typeof window === "undefined") {
    return (
      <div className="flex items-center space-x-4">
        <BellOff className="h-5 w-5 text-gray-400" />
        <Switch disabled className="data-[state=checked]:bg-primary" />
        <span className="text-sm">Enable notifications</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {isSubscribed ? (
        <Bell className="h-5 w-5 text-primary" />
      ) : (
        <BellOff className="h-5 w-5 text-gray-400" />
      )}
      <Switch
        checked={isSubscribed}
        onCheckedChange={handleToggle}
        disabled={loading || !messaging}
        className="data-[state=checked]:bg-primary"
      />
      <span className="text-sm">
        {loading
          ? "Loading..."
          : isSubscribed
          ? "Notifications enabled"
          : "Enable notifications"}
      </span>
    </div>
  );
};

export default NotificationToggle;
