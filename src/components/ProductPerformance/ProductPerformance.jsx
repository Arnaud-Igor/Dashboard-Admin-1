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

const ProductData = [
  {
    name: "Product 1",
    revenue: 4000,
    orders: 3000,
  },
  {
    name: "Product 2",
    revenue: 3000,
    orders: 2000,
  },
  {
    name: "Product 3",
    revenue: 2000,
    orders: 2780,
  },
  {
    name: "Product 4",
    revenue: 2780,
    orders: 1890,
  },
  {
    name: "Product 5",
    revenue: 1890,
    orders: 2390,
  },
  {
    name: "Product 6",
    revenue: 2390,
    orders: 3490,
  },
];

function ProductPerformance() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        User Activity Heatmap
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ProductData}>
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

            <Bar dataKey="revenue" fill="#f59e0b" />
            <Bar dataKey="orders" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default ProductPerformance;
