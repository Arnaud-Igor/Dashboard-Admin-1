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

const retentionData = [
  { name: "Week 1", sales: 400 },
  { name: "Week 2", sales: 300 },
  { name: "Week 3", sales: 200 },
  { name: "Week 4", sales: 278 },
  { name: "Week 5", sales: 189 },
  { name: "Week 6", sales: 239 },
  { name: "Week 7", sales: 68 },
  { name: "Week 8", sales: 30 },
];

function UserRetention() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Users Retention
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={retentionData}>
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
              dataKey="sales"
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

export default UserRetention;
