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
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
  { name: "Jul", sales: 3490 },
  { name: "Aug", sales: 4000 },
  { name: "Sep", sales: 3000 },
  { name: "Oct", sales: 2000 },
  { name: "Nov", sales: 2780 },
  { name: "Dec", sales: 1890 },
];

function SalesAreaChart() {
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
        <h2 className="text-xl font-semibold text-gray-100">Sales Overwiew</h2>

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
          <AreaChart data={salesData}>
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
              dataKey="sales"
              stroke="#6366f1"
              fill="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#10B981", r: 4, strokeWidth: 3 }}
              activeDot={{ r: 6, strokeWidth: 5, fill: "#10B981" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesAreaChart;
