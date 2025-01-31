"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Image
        src="/images/FullLogo.png" 
        alt="404"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <Link href="/" className="mt-4 text-primary hover:text-foreground">
        Return Home
      </Link>
    </div>
  );
}
