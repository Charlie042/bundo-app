"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import Avatar from "../ui/avatar";
import { useEffect, useState } from "react";
import { Slider } from "./_components/slider";
import { BundoLogo } from "@/public/images";
import Link from "next/link";
import { Shoppingbag } from "@/public/svgs";

export const NavBar = () => {
  const[isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`sticky z-30 bg-white top-0 w-full ${isScrolled ?"shadow-lg" : "shadow-none"} `}>
        <div className="nav-container">
          {" "}
          <Link href="/">
            <Image src={BundoLogo} alt="bundo logo" width={100} height={100} />
          </Link>
          <div className="nav-links">
            <div className="marketplace-container">
              <Link href="/" className="text-primary font-medium hover:text-green-500">Marketplace</Link>
              <div className="cart-container">
                <Image
                  src="/svgs/shoppingbag.svg"
                  alt="shopping bag icon"
                  width={20}
                  height={20}
                />
                <span className="cart-badge">0</span>
              </div>
            </div>
            <div className="user-container">
              <span className="text-foreground">Hi Michael!</span>
              <Avatar name="Michael" />
            </div>

            <Image
              src="/svgs/shoppingbag.svg"
              alt="shopping bag icon"
              height={24}
              width={20}
            />
            <div className="menu-icon" onClick={() => setIsOpen(true)}>
              <Menu size={34} className="text-primary font-bold" />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
      <Slider isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
