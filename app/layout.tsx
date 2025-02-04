import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar/navBar";
import { Footer } from "@/components/footer/footer";
import { QueryProvider } from "@/utils/QueryProvider";
import { Toaster } from "sonner";
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
      <body className={` `}>
        <NavBar />
        <div className="max-w-[1550px] mx-auto">
          <QueryProvider>{children}</QueryProvider>
          <Toaster
            position="top-left"
            toastOptions={{ className: "bg-secondary" }}
          />
          <Footer />
        </div>
      </body>
    </html>
  );
}
