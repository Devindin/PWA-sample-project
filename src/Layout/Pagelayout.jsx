import React, { useState } from "react";
import { Link } from "react-router-dom"; // use react-router for navigation
import {
  FaHome,
  FaUsers,
  FaCog,
  FaBoxOpen,
  FaShoppingCart,
  FaTruck,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";

function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserFriends />, label: "Customers", path: "/customers" },
    { icon: <FaShoppingCart />, label: "Orders", path: "/orders" },
    { icon: <FaUsers />, label: "Users", path: "/users" },
    { icon: <FaBoxOpen />, label: "Products", path: "/products" },
    { icon: <FaTruck />, label: "Delivery", path: "/delivery" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, label: "Sign Out", path: "/logout" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-gray-800 text-white transition-all duration-300 
        ${collapsed ? "w-16" : "w-56"}`}
      >
        {/* Logo / Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!collapsed && <span className="text-lg font-bold">MyApp</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-gray-700"
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2  ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 p-4 rounded cursor-pointer hover:bg-gray-700"
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {children || (
          <h1 className="text-2xl font-semibold text-gray-700">
            Welcome to Dashboard
          </h1>
        )}
      </div>
    </div>
  );
}

export default PageLayout;
