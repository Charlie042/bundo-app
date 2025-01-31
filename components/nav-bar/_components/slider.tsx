import Image from "next/image";
import { CircleX } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { SliderProps } from "@/app/model/Navbar";

export const Slider = ({ isOpen,setIsOpen }: SliderProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg z-50 py- flex flex-col"
    >
      {/* Close Button */}
      <div className="flex justify-end border-b px-5 py-5">
        <CircleX
          size={30}
          className="cursor-pointer text-primary"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div>
        <Link href='/Explore' onClick={()=> setIsOpen(false)} className="flex-center mt-5">
          <Image src="/svgs/search.svg" alt="search icon" width={20} height={20}/>
          <span>Explore</span>
        </Link>
        <div className="flex-center">
          <Image src="/svgs/user.svg" alt="user icon"  width={20} height={20}/>
          <span>Account</span>
        </div>
      </div>
    </motion.div>
  );
};
