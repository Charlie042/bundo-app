// import React, { useState, useEffect } from "react";
// import { Switch } from "@/components/ui/switch";
// import { Bell, BellOff } from "lucide-react";
// import { getToken, deleteToken } from "firebase/messaging";
// import { messaging } from "@/utils/firebase/firebase";
// import { toast } from "sonner";

// const NotificationToggle = () => {
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkSubscriptionStatus();
//   }, []);

//   const checkSubscriptionStatus = async () => {
//     try {
//       if (!("Notification" in window)) {
//         toast.error("Notifications not supported", {
//           description: "This browser does not support notifications",
//         });
//         setLoading(false);
//         return;
//       }

//       const permission = Notification.permission;

//       if (permission === "granted") {
//         const currentToken = await getToken(messaging, {
//           vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
//         });

//         setIsSubscribed(!!currentToken);
//       } else {
//         setIsSubscribed(false);
//       }
//     } catch (error) {
//       toast.error("Error checking notifications", {
//         description: "Failed to check notification status",
//       });
//       console.error("Error checking subscription status:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleToggle = async () => {
//     try {
//       setLoading(true);

//       if (!isSubscribed) {
//         const permission = await Notification.requestPermission();

//         if (permission === "granted") {
//           const token = await getToken(messaging, {
//             vapidKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_KEY,
//           });

//           if (token) {
//             toast.success("Notifications Enabled", {
//               description: "You will now receive notifications",
//             });
//             setIsSubscribed(true);
//           } else {
//             toast.error("Token Generation Failed", {
//               description: "Could not generate notification token",
//             });
//           }
//         } else {
//           toast.error("Permission Denied", {
//             description: "Please enable notifications in your browser settings",
//           });
//         }
//       } else {
//         await deleteToken(messaging);

//         toast.success("Notifications Disabled", {
//           description: "You will no longer receive notifications",
//         });
//         setIsSubscribed(false);
//       }
//     } catch (error) {
//       toast.error("Notification Toggle Failed", {
//         description: "An error occurred while changing notification settings",
//       });
//       console.error("Error toggling notifications:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center space-x-4">
//       {isSubscribed ? (
//         <Bell className="h-5 w-5 text-primary" />
//       ) : (
//         <BellOff className="h-5 w-5 text-gray-400" />
//       )}
//       <Switch
//         checked={isSubscribed}
//         onCheckedChange={handleToggle}
//         disabled={loading}
//         className="data-[state=checked]:bg-primary"
//       />
//       <span className="text-sm">
//         {loading
//           ? "Loading ..."
//           : isSubscribed
//           ? "Notifications enabled"
//           : "Enable notifications"}
//       </span>
//     </div>
//   );
// };

// export default NotificationToggle;
