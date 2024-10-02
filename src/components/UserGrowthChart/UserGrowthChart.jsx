import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const usersData = [
  { name: "Jan", users: 500 },
  { name: "Feb", users: 700 },
  { name: "Mar", users: 900 },
  { name: "Apr", users: 1280 },
  { name: "May", users: 2890 },
  { name: "Jun", users: 3390 },
  { name: "Jul", users: 4490 },
  { name: "Aug", users: 5060 },
  { name: "Sep", users: 5208 },
  { name: "Oct", users: 6010 },
  { name: "Nov", users: 7080 },
  { name: "Dec", users: 8890 },
];

function UserGrowthChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">User Growth</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usersData}>
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
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#10B981", r: 4, strokeWidth: 3 }}
              activeDot={{ r: 6, strokeWidth: 5, fill: "#10B981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserGrowthChart;
