import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar/navBar";
import { Footer } from "@/components/footer/footer";
import { QueryProvider } from "@/utils/QueryProvider";
// import { FirebaseNotifications } from "@/components/fireBase/messaging";

export const metadata: Metadata = {
  title: "Bundo App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` max-w-[1550px] mx-auto`}>
        <NavBar />
        {/* <FirebaseNotifications/> */}
        <QueryProvider>{children}</QueryProvider>

        <Footer />
      </body>
    </html>
  );
}
