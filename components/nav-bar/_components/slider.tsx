import Image from "next/image";
import { CircleX, House } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SliderProps } from "@/app/model/Navbar";
// import NotificationToggle from "./push-notification";

export const Slider = ({ isOpen, setIsOpen }: SliderProps) => {
  const navItems = [
    {
      href: "/",
      icon: <House />,
      label: "Home",
    },
    {
      href: "/Explore",
      icon: <Image src="/svgs/search.svg" alt="" width={20} height={20} />,
      label: "Explore",
    },
    {
      href: "/account",
      icon: <Image src="/svgs/user.svg" alt="" width={20} height={20} />,
      label: "Account",
    },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed right-0 top-0 w-96 h-full bg-white z-50 shadow-lg"
      aria-hidden={!isOpen}
    >
      <div className="h-full flex flex-col">
        <div className="flex justify-end border-b px-5 py-5">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <CircleX size={30} className="cursor-pointer text-primary" />
          </button>
        </div>

        <nav className="flex-1 mt-5">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-secondary transition-colors"
                >
                  {item.icon}
                  <span className="hover:text-primary">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-5">
          {/* To enable push notifications:  
              1. Ensure Firebase is properly set up.  
              2. Uncomment the `NotificationToggle` component below.  
              3. Uncomment and configure Firebase in the `public` and `utils` folders.  
*/}

          {/* <NotificationToggle /> */}
        </div>
      </div>
    </motion.div>
  );
};
