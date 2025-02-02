import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, BellOff } from "lucide-react";
import { getToken, deleteToken } from "firebase/messaging";
import { messaging } from "@/utils/firebase/firebase"; 

const NotificationToggle = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    checkSubscriptionStatus();
  }, []);

  const checkSubscriptionStatus = async () => {
    try {
   
      if (!("Notification" in window)) {
        console.log("This browser does not support notifications");
        setLoading(false);
        return;
      }

      // Check permission status
      const permission = Notification.permission;

      if (permission === "granted") {
        
        const currentToken = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
        });
        setIsSubscribed(!!currentToken);
      } else {
        setIsSubscribed(false);
      }
    } catch (error) {
      console.error("Error checking subscription status:", error);
    }
    setLoading(false);
  };

  const handleToggle = async () => {
    try {
      setLoading(true);

      if (!isSubscribed) {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
          });

          if (token) {
            console.log("Token:", token);
            setIsSubscribed(true);
          }
        }
      } else {
        await deleteToken(messaging);

        setIsSubscribed(false);
      }
    } catch (error) {
      console.error("Error toggling notifications:", error);
    } finally {
      setLoading(false);
    }
  };

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
        disabled={loading}
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
