import Image from "next/image";
import { CircleX } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { House } from "lucide-react";
import { SliderProps } from "@/app/model/Navbar";
import NotificationToggle from "./push-notification";

export const Slider = ({ isOpen,setIsOpen }: SliderProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed right-0 top-0 w-96 h-full bg-white  z-50  "
    >
      <div>
        <div className="flex justify-end border-b px-5 py-5">
          <CircleX
            size={30}
            className="cursor-pointer text-primary"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div>
          <Link
            href="/"
            className="flex-center mt-5"
            onClick={() => setIsOpen(false)}
          >
            <House />
            <span className="hover:text-primary">Home</span>
          </Link>
          <Link
            href="/Explore"
            onClick={() => setIsOpen(false)}
            className="flex-center "
          >
            <Image
              src="/svgs/search.svg"
              alt="search icon"
              width={20}
              height={20}
            />
            <span className="hover:text-primary">Explore</span>
          </Link>
          <div className="flex-center">
            <Image
              src="/svgs/user.svg"
              alt="user icon"
              width={20}
              height={20}
              className="text-primary"
            />
            <span className="hover:text-primary">Account</span>
          </div>
        </div>
        <div className="flex-center">
          <NotificationToggle />
        </div>
      </div>
    </motion.div>
  );
};
