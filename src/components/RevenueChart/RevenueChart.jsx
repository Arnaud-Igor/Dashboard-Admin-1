import { motion } from "framer-motion";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const revenueData = [
  { name: "Feb", revenue: 3000, target: 3300 },
  { name: "Jan", revenue: 4000, target: 3800 },
  { name: "Mar", revenue: 2000, target: 2500 },
  { name: "Apr", revenue: 2780, target: 3500 },
  { name: "May", revenue: 1890, target: 2600 },
  { name: "Jun", revenue: 2390, target: 1700 },
  { name: "Jul", revenue: 3490, target: 1400 },
  { name: "Aug", revenue: 4000, target: 7000 },
  { name: "Sep", revenue: 3000, target: 2300 },
  { name: "Oct", revenue: 2000, target: 1000 },
  { name: "Nov", revenue: 2780, target: 4100 },
  { name: "Dec", revenue: 1890, target: 3000 },
];

function RevenueChart() {
  const [selectTimeRange, setSelectTimeRange] = useState("This Month");

  const handleSelectTimeRange = (e) => {
    setSelectTimeRange(e.target.value);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col w-full sm:flex-row gap-6 sm:gap-0 justify-between sm:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Revenue Vs Target
        </h2>

        <select
          value={selectTimeRange}
          onChange={handleSelectTimeRange}
          className="bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
        </select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <XAxis dataKey="name" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <CartesianGrid strokeDasharray="2 2" stroke="#4B5563" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "#4B5563",
              }}
              labelStyle={{ color: "#D1D5DB" }}
              itemStyle={{ color: "#D1D5DB" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.3}
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
              strokeWidth={3}
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default RevenueChart;
