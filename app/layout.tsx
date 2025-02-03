import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar/navBar";
import { Footer } from "@/components/footer/footer";
import { QueryProvider } from "@/utils/QueryProvider";

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
       
        <QueryProvider>{children}</QueryProvider>

        <Footer />
      </body>
    </html>
  );
}
