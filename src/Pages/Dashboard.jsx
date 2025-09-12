import React, { useState, lazy, Suspense } from "react";
import PageLayout from "../Layout/Pagelayout";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import ModernCalendar from "../Components/ModernCalendar";
import { Pie, Bar } from "react-chartjs-2";
import OrdersAreaChart from "../Components/OrdersAreaChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Pie chart data
const pieData = {
  labels: ["Online", "In-Store", "COD"],
  datasets: [
    {
      data: [45, 30, 25],
      backgroundColor: ["#06B6D4", "#6366F1", "#F59E0B"],
      borderWidth: 0,
    },
  ],
};

// Bar chart data
const barChartData = {
  labels: [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F",
  ],
  datasets: [
    {
      label: "Orders",
      data: [12, 19, 7, 15, 22, 9],
      backgroundColor: [
        "#06B6D4", // cyan
        "#3B82F6", // blue
        "#0EA5E9", // sky blue
        "#6366F1", // indigo
        "#2563EB", // deep blue
        "#0891B2", // teal
      ],
      borderRadius: 6,
      barPercentage: 0.6,
    },
  ],
};

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const LazyBar = lazy(() =>
    import("react-chartjs-2").then((mod) => ({ default: mod.Bar }))
  );
  const LazyPie = lazy(() =>
    import("react-chartjs-2").then((mod) => ({ default: mod.Pie }))
  );

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
            className="w-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow flex flex-col items-center justify-center p-2"
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
          {/* Bar Chart */}
          <motion.div
            className="w-2/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-md font-semibold mb-2">Orders Overview</h2>
            <div className="h-90%">
              <Suspense
                fallback={<p className="text-center">Loading chart...</p>}
              >
                <LazyBar
                  id="orders-bar"
                  data={barChartData}
                  redraw
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        labels: {
                          color: "#fff",
                          font: { weight: "500" },
                        },
                      },
                      tooltip: {
                        backgroundColor: "#1F2937",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        borderRadius: 8,
                      },
                    },
                    scales: {
                      x: {
                        ticks: { color: "#374151" },
                        grid: { display: false },
                      },
                      y: {
                        ticks: { color: "#374151" },
                        grid: { display: false },
                      },
                    },
                  }}
                />
              </Suspense>
            </div>
          </motion.div>

          {/* Conversion Rate */}
          <motion.div
            className="w-1/4 bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-600 dark:to-emerald-800
             rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-sm font-semibold">Conversion Rate</h2>
            <p className="text-3xl font-bold mt-1">42%</p>
            <span className="text-sm text-green-200 mt-2">▲ 5% this week</span>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            className="w-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow p-3 flex flex-col items-center justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-sm font-semibold mb-2">Order Types</h2>
            <Suspense fallback={<p>Loading chart...</p>}>
              <LazyPie id="orders-pie" data={pieData} redraw />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
