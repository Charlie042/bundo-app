"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/marker.svg" // Make sure this image exists in your public folder
        alt="404"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <Link href="/" className="mt-4 text-blue-500 hover:text-blue-700">
        Return Home
      </Link>
    </div>
  );
}
