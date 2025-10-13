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
  FaBars,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/profile.png";

function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile toggle
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserFriends />, label: "Customers", path: "/customers" },
    { icon: <FaShoppingCart />, label: "Orders", path: "/orders" },
    { icon: <FaBoxOpen />, label: "Products", path: "/products" },
    { icon: <FaTruck />, label: "Delivery", path: "/delivery" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, label: "Sign Out" },
  ];

  return (
    <div
      className={`flex h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50"
      }`}
    >
      {/* 🌙 Sidebar for Desktop */}
      <motion.div
        animate={{ width: collapsed ? "4rem" : "15rem" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className={`hidden md:flex flex-col ${
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

      {/* Mobile Hamburger */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          <FaBars size={16} />
        </button>
      </div>

      {/* 📱 Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 left-0 w-64 h-full z-40 flex flex-col ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            } shadow-lg p-4`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg text-purple-700 dark:text-white "></h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-purple-600 text-2xl "
              >
                &times;
              </button>
            </div>

            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition ${
                    darkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-purple-100 text-purple-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-hidden flex flex-col">
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
