import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DAILY_SALES_DATA = [
  {
    name: "Mon",
    "0-4": 4000,
  },
  {
    name: "Tue",
    "0-4": 3000,
  },
  {
    name: "Wed",
    "0-4": 2000,
  },
  {
    name: "Thu",
    "0-4": 2780,
  },
  {
    name: "Fri",
    "0-4": 1890,
  },
  {
    name: "Sat",
    "0-4": 2390,
  },
  {
    name: "Sun",
    "0-4": 3490,
  },
];

function DailySalesTrend() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Daily Sales Trend
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DAILY_SALES_DATA}>
            <CartesianGrid strokeDasharray="2 2" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#D1D5DB" />
            <YAxis stroke="#D1D5DB" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "#4B5563",
              }}
              labelStyle={{ color: "#D1D5DB" }}
              itemStyle={{ color: "#D1D5DB" }}
            />
            <Bar dataKey="0-4" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DailySalesTrend;
