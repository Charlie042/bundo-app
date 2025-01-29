import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar/navBar";
import { Footer } from "@/components/footer/footer";

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
      <body
        className={`px-40 border-black`}
      >
         <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
