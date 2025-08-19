import React, { useState } from "react";
import { Link } from "react-router-dom"; // use react-router for navigation
import {
  FaHome,
  FaCog,
  FaBoxOpen,
  FaShoppingCart,
  FaTruck,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import Profile from "../assets/profile.png";

function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserFriends />, label: "Customers", path: "/customers" },
    { icon: <FaShoppingCart />, label: "Orders", path: "/orders" },
    { icon: <FaBoxOpen />, label: "Products", path: "/products" },
    { icon: <FaTruck />, label: "Delivery", path: "/delivery" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaSignOutAlt />, label: "Sign Out", path: "/logout" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-bg_color text-black transition-all duration-300 rounded-[32px] m-4
        ${collapsed ? "w-16" : "w-56"}`}
      >
        <div className="justify-end">
           <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded "
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>
        {/* Logo / Toggle Button */}
        <div className="flex items-center justify-center flex-col  ">
          
           <img src={Profile} className="w-[50px] rounded-full" />
          {!collapsed && <h1>Devindi Karunathilaka</h1>}
         
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2  ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 p-4 rounded-[12px] cursor-pointer hover:bg-c4 font-semibold"
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        {/* <div className="w-fulll bg-primary_button_bg m-4">
          <h1>Hi</h1>
        </div> */}
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
