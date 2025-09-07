import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales",
      data: [120, 200, 150, 220, 180, 250, 300],
      fill: false,
      backgroundColor: "#7F3DFF",
      borderColor: "#7F3DFF",
      tension: 0.4,
    },
  ],
};

const barChartData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Orders",
      data: [12, 19, 7, 15],
      backgroundColor: "#A78BFA",
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
      <div className="w-full h-full flex flex-col gap-3 p-2  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Top Stats Row */}
        <div className="flex flex-row gap-3 flex-none h-[15%]">
          {/* Total Users */}
          <motion.div
            className="w-1/4 bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-700 dark:to-purple-900 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col justify-center items-center text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaUsers className="text-3xl mb-2" />
            <h2 className="text-md font-semibold">Total Users</h2>
            <p className="text-xl font-bold">1,245</p>
          </motion.div>

          {/* Revenue This Week */}
          <motion.div
            className="w-2/4 bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-700 dark:to-indigo-900 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col justify-center items-center text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaDollarSign className="text-3xl mb-2" />
            <h2 className="text-md font-semibold">Revenue This Week</h2>
            <p className="text-xl font-bold">$12,450</p>
          </motion.div>

          {/* Pending Orders */}
          <motion.div
            className="w-1/4 bg-gradient-to-r from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-800 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col justify-center items-center text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <FaShoppingCart className="text-3xl mb-2" />
            <h2 className="text-md font-semibold">Pending Orders</h2>
            <p className="text-xl font-bold">24</p>
          </motion.div>
        </div>

        {/* Middle Row: Sales + Calendar */}
        <div className="flex flex-row gap-3 flex-none h-[40%]">
          <motion.div
            className="w-3/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-2">Weekly Sales</h2>
            <div className="h-full">
              <Line
                data={lineChartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { labels: { color: "#fff" } } },
                  scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } },
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-1 text-center">Calendar</h2>
            <div className="h-[90%] w-full">
              <Calendar
                onChange={setDate}
                value={date}
                className="h-full w-full text-sm dark:bg-gray-700 dark:text-gray-100"
              />
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
            <div className="h-full">
              <Bar
                data={barChartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { labels: { color: "#fff" } } },
                  scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } },
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
