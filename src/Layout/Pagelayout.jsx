import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/theme/themeSlice";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaBoxOpen,
  FaShoppingCart,
  FaTruck,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import Profile from "../assets/profile.png";

function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserFriends />, label: "Customers", path: "/customers" },
    { icon: <FaShoppingCart />, label: "Orders", path: "/orders" },
    { icon: <FaBoxOpen />, label: "Products", path: "/products" },
    { icon: <FaTruck />, label: "Delivery", path: "/delivery" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, label: "Sign Out"},
  ];

  return (
    <div
      className={`flex h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50"
      }`}
    >
      {/* Sidebar */}
      <motion.div
        animate={{ width: collapsed ? "4rem" : "15rem" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className={`flex flex-col ${
          darkMode
            ? "bg-gray-800/60 border-gray-700 text-gray-100"
            : "bg-white/30 border-white/40 text-black"
        } backdrop-blur-lg shadow-lg border rounded-[32px] m-4 overflow-hidden`}
      >
        {/* Collapse + Dark Mode */}
        <div className="flex justify-between items-center p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-purple-200/50 hover:bg-purple-300/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            {collapsed ? (
              <FiChevronRight className="text-purple-900 dark:text-gray-200 text-xl" />
            ) : (
              <FiChevronLeft className="text-purple-900 dark:text-gray-200 text-xl" />
            )}
          </button>

          {!collapsed && (
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="p-2 rounded-lg bg-purple-200/50 hover:bg-purple-300/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? (
                <BsSun className="text-yellow-400 text-lg" />
              ) : (
                <BsMoonStars className="text-purple-900 text-lg" />
              )}
            </button>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center justify-center flex-col p-4">
          <motion.img
            src={Profile}
            className="w-[50px] rounded-full border-2 border-purple-400"
            animate={{ scale: collapsed ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          />
          {!collapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-sm font-semibold text-purple-900 dark:text-gray-200"
            >
              Devindi Karunathilaka
            </motion.h1>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-[12px] cursor-pointer font-medium transition ${
                darkMode
                  ? "bg-gray-700/30 hover:bg-gray-600 text-gray-200"
                  : "bg-white/20 hover:bg-purple-200/40 text-purple-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">
        {children || (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-purple-800 dark:text-gray-200"
          >
            Welcome to Dashboard
          </motion.h1>
        )}
      </div>
    </div>
  );
}

export default PageLayout;
