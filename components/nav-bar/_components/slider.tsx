import TheUser from "@/public/svgs/user.svg";
import SearchIcon from "@/public/svgs/search.svg";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { motion } from "motion/react";

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
        <div className="flex-center mt-5">
          <Image src={SearchIcon} alt="search icon" />
          <span>Explore</span>
        </div>
        <div className="flex-center">
          <Image src={TheUser} alt="user icon" />
          <span>Account</span>
        </div>
      </div>
    </motion.div>
  );
};
