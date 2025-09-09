import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import ModernCalendar from "../Components/ModernCalendar";

import OrdersAreaChart from "../Components/OrdersAreaChart"; // import your area chart
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barChartData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Orders",
      data: [12, 19, 7, 15],
      backgroundColor: [
        "#A78BFA", // purple
        "#F472B6", // pink
        "#C084FC", // lighter purple
        "#F9A8D4", // light pink
      ],
      borderRadius: 6, // rounded bars
      barPercentage: 0.6, // slim bars
    },
  ],
};

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col gap-3 p-2 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Top Stats Row */}
        <div className="flex flex-row gap-6 h-[15%]">
          {/* Total Users */}
          <motion.div
            className="w-1/4 bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-700 dark:to-pink-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-white hover:scale-105 transition-transform"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaUsers className="text-5xl mb-4 drop-shadow-lg" />
            <h2 className="text-lg font-semibold tracking-wide">Total Users</h2>
            <p className="text-3xl font-bold mt-1">1,245</p>
          </motion.div>

          {/* Revenue This Week */}
          <motion.div
            className="w-2/4 bg-gradient-to-br from-indigo-500 to-blue-600 dark:from-indigo-700 dark:to-blue-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-white hover:scale-105 transition-transform"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaDollarSign className="text-5xl mb-4 drop-shadow-lg text-yellow-300" />
            <h2 className="text-lg font-semibold tracking-wide">
              Revenue This Week
            </h2>
            <p className="text-3xl font-bold mt-1">$12,450</p>
          </motion.div>

          {/* Pending Orders */}
          <motion.div
            className="w-1/4 bg-gradient-to-br from-pink-400 to-indigo-500 dark:from-pink-600 dark:to-indigo-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-white hover:scale-105 transition-transform"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaShoppingCart className="text-5xl mb-4 drop-shadow-lg text-green-300" />
            <h2 className="text-lg font-semibold tracking-wide">
              Pending Orders
            </h2>
            <p className="text-3xl font-bold mt-1">24</p>
          </motion.div>
        </div>

        {/* Middle Row: Orders Area Chart + Calendar */}
        <div className="flex flex-row gap-3 flex-none h-[45%]">
          <motion.div
            className="w-3/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-2">Weekly Orders</h2>
            <div className="h-full">
              <OrdersAreaChart />
            </div>
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow  flex flex-col items-center justify-center p-2"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="h-70% w-full">
              <ModernCalendar date={date} setDate={setDate} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Orders / Quick Links */}
        <div className="flex flex-row gap-3 flex-none h-[35%]">
          <motion.div
            className="w-3/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-2">Orders Overview</h2>
            <div className="h-90%">
              <Bar
                data={barChartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      labels: {
                        color: "#fff", // legend text color
                        font: { weight: "500" },
                      },
                    },
                    tooltip: {
                      backgroundColor: "#1F2937", // dark tooltip
                      titleColor: "#fff",
                      bodyColor: "#fff",
                      borderRadius: 8,
                    },
                  },
                  scales: {
                    x: {
                      ticks: { color: "#374151" }, // dark gray x-axis
                      grid: { display: false },
                    },
                    y: {
                      ticks: { color: "#374151" }, // dark gray y-axis
                      grid: { color: "#E5E7EB" },
                    },
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col justify-center items-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-2 text-center">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-1 text-purple-700 dark:text-purple-400 font-medium text-sm">
              <li>New Order</li>
              <li>Add Product</li>
              <li>View Customers</li>
              <li>Settings</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
