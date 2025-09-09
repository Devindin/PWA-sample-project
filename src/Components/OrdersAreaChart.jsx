import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data for orders
const sampleData = [
  { date: "2025-07-01", orders: 12 },
  { date: "2025-07-02", orders: 18 },
  { date: "2025-07-03", orders: 10 },
  { date: "2025-07-04", orders: 22 },
  { date: "2025-07-05", orders: 30 },
  { date: "2025-07-06", orders: 25 },
  { date: "2025-07-07", orders: 35 },
];

export default function OrdersAreaChart() {
  const data = sampleData;
  const isLoading = false;
  const error = null;

  return (
    <ResponsiveContainer width="100%" height="90%">
      {isLoading ? (
        <div className="flex items-center justify-center h-full text-xs sm:text-sm">
          Loading chart...
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-full text-red-500 text-xs sm:text-sm">
          {error}
        </div>
      ) : (
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: window.innerWidth < 640 ? 5 : -20,
            left: -30,
            bottom: 0,
          }}
        >
          <defs>
            {/* Gradient matching your purple → pink theme */}
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#A78BFA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis
            dataKey="date"
            tick={{
              fontSize: window.innerWidth < 640 ? 10 : 12,
              fill: "#374151",
              fontFamily: "Roboto",
            }}
            tickFormatter={(str) => {
              const date = new Date(str);
              return window.innerWidth < 640
                ? `${date.getDate()}/${date.getMonth() + 1}`
                : `${date.toLocaleString("en-US", { month: "short" })} ${
                    date.getDate()
                  }`;
            }}
          />
          <YAxis
            orientation="left"
            domain={["auto", "auto"]}
            tick={{
              fontSize: window.innerWidth < 640 ? 10 : 12,
              fill: "#374151",
              fontFamily: "Roboto",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#7F3DFF" // matches top card border
            fillOpacity={1}
            fill="url(#colorOrders)"
            strokeWidth={3}
          />
        </AreaChart>
      )}
    </ResponsiveContainer>
  );
}
