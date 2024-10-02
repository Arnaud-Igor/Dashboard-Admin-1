import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ordersData = [
  { name: "09/01", orders: 40 },
  { name: "09/02", orders: 30 },
  { name: "09/03", orders: 20 },
  { name: "09/04", orders: 45 },
  { name: "09/05", orders: 55 },
  { name: "09/06", orders: 60 },
  { name: "09/07", orders: 90 },
  { name: "09/08", orders: 50 },
  { name: "09/09", orders: 100 },
  { name: "09/10", orders: 70 },
  { name: "09/11", orders: 120 },
  { name: "09/12", orders: 75 },
  { name: "09/13", orders: 290 },
];

function DailyOrderChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Daily Orders</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ordersData}>
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
            <Legend />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", r: 4, strokeWidth: 3 }}
              activeDot={{ r: 6, strokeWidth: 5, fill: "#10B981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DailyOrderChart;
