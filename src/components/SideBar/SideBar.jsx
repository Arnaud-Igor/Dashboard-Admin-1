import {
  IoBarChart,
  IoCart,
  IoClose,
  IoMenu,
  IoSettingsSharp,
} from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaArrowTrendUp, FaBagShopping, FaDollarSign } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideBarItems = [
  {
    name: "Overview",
    icon: IoBarChart,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Products",
    icon: FaBagShopping,
    color: "#ec4899",
    href: "/products",
  },
  {
    name: "Users",
    icon: FaUsers,
    color: "#8b5cf6",
    href: "/users",
  },
  {
    name: "Sales",
    icon: FaDollarSign,
    color: "#f59e0b",
    href: "/sales",
  },
  {
    name: "Orders",
    icon: IoCart,
    color: "blue",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: FaArrowTrendUp,
    color: "#10b981",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: IoSettingsSharp,
    color: "#3b82f6",
    href: "/settings",
  },
];

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen(!isOpen);

  return (
    <div
      // animate={{ width: isOpen ? 256 : 80 }}
      className={`relative transition-all duration-300 ease-in-out flex-shrink-0 ${
        isOpen ? "w-40" : "w-20"
      }`}
    >
      <div className="h-full bg-gray-900/50 p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={toggleSideBar}
          className="text-gray-100 text-[20px] p-2 rounded-full bg-gray-800 max-w-fit border border-gray-700"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </motion.button>

        <nav className="flex-grow mt-6">
          {SideBarItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center px-2 py-4 text-sm font-medium rounded-lg hover:bg-gray-700 hover:translate-x-2 transition-all duration-300">
                <item.icon
                  className="text-[20px]"
                  style={{ color: item.color, minWidth: "20px" }}
                />

                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="ml-4 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
