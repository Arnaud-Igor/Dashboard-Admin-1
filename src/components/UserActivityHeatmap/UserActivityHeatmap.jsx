import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const USER_ACTIVITY_DATA = [
  {
    name: "Mon",
    "0-4": 4000,
    "4-8": 3000,
    "8-12": 2000,
    "12-16": 2780,
    "16-20": 1890,
    "20-24": 2390,
  },
  {
    name: "Tue",
    "0-4": 3000,
    "4-8": 2000,
    "8-12": 2780,
    "12-16": 1890,
    "16-20": 2390,
    "20-24": 3490,
  },
  {
    name: "Wed",
    "0-4": 2000,
    "4-8": 2780,
    "8-12": 1890,
    "12-16": 2390,
    "16-20": 3490,
    "20-24": 2000,
  },
  {
    name: "Thu",
    "0-4": 2780,
    "4-8": 1890,
    "8-12": 2390,
    "12-16": 3490,
    "16-20": 2000,
    "20-24": 2780,
  },
  {
    name: "Fri",
    "0-4": 1890,
    "4-8": 2390,
    "8-12": 3490,
    "12-16": 2000,
    "16-20": 2780,
    "20-24": 1890,
  },
  {
    name: "Sat",
    "0-4": 2390,
    "4-8": 3490,
    "8-12": 2000,
    "12-16": 2780,
    "16-20": 1890,
    "20-24": 2390,
  },
  {
    name: "Sun",
    "0-4": 3490,
    "4-8": 2000,
    "8-12": 2780,
    "12-16": 1890,
    "16-20": 2390,
    "20-24": 3490,
  },
];

function UserActivityHeatmap() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        User Activity Heatmap
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={USER_ACTIVITY_DATA}>
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
            <Legend />
            <Bar dataKey="0-4" stackId={"a"} fill="#6366f1" />
            <Bar dataKey="4-8" stackId={"a"} fill="#8b5cf6" />
            <Bar dataKey="8-12" stackId={"a"} fill="#ec4899" />
            <Bar dataKey="12-16" stackId={"a"} fill="#f59e0b" />
            <Bar dataKey="16-20" stackId={"a"} fill="#10b981" />
            <Bar dataKey="20-24" stackId={"a"} fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserActivityHeatmap;
