"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Shoppingbag } from "@/public/svgs";
import { useState } from "react";
import { Slider } from "./_components/slider";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div>
          <Image
            src="/Bundo-Logo/FullLogo.png"
            alt="bundo logo"
            width={100}
            height={100}
          />
        </div>
        <div className="nav-links">
          <div className="marketplace-container">
            <span className="text-primary font-medium">Marketplace</span>
            <div className="cart-container">
              <Image src={Shoppingbag} alt="shopping bag icon" />
              <span className="cart-badge">0</span>
            </div>
          </div>
          <div className="user-container">
            <span className="text-foreground">Hi Michael!</span>
            <div className="user-avatar">M</div>
          </div>

          <Image src={Shoppingbag} alt="shopping bag icon" height={24} />

          <div className="menu-icon" onClick={() => setIsOpen(true)}>
            <Menu size={34} className="text-primary font-bold" />
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
