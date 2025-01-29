"use client"

import Image from "next/image"
import { Menu} from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import { Slider } from "./_components/slider";

export const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <nav className="flex justify-between items-center py-5 px-10">
          <div>
            <Image
              src="/Bundo-Logo/FullLogo.png"
              alt="bundo logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center gap-10">
            <div className="flex justify-center items-center gap-3">
              <span className="text-primary font-medium">Marketplace</span>
              <div className="flex items-center justify-center gap-1">
                <HiOutlineShoppingBag className="h-9 text-primary font-extrabold" />
                <span className="bg-red-500 text-white rounded-full px-2 text-sm">
                  0
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground">Hi Michael!</span>
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white text-lg font-medium rounded-full">
                M
              </div>
            </div>
            <HiOutlineShoppingBag className="w-8 h-6 text-primary font-extrabold" />

            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Menu size={34} className="text-primary font-bold" />
            </div>
          </div>
        </nav>
        {isOpen && (
          <div
            className="fixed bg-black bg-opacity-50 inset-0 z-20"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
       <Slider isOpen={isOpen} setIsOpen={setIsOpen}/>
      </>
    );
}