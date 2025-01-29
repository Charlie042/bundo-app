import type { Metadata } from "next";
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
        className={` border-black`}
      >
         <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
