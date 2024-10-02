import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";

const overviewData = [
  { name: "Revenue", value: "$1,027,700", change: 12.5, icon: DollarSign },
  { name: "Users", value: "41,200", change: 5.5, icon: Users },
  { name: "Orders", value: "1,200", change: -2.5, icon: ShoppingCart },
  { name: "Page Views", value: "1,200,000", change: 24.5, icon: Eye },
];

function OverviewCard() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((data, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{data.name}</h3>
              <p className="text-xl mt-1 font-semibold text-gray-100">
                {data.value}
              </p>
            </div>

            <div
              className={`p-3 rounded-full ${
                data.change >= 0 ? "bg-green-500" : "bg-red-500"
              } bg-opacity-20`}
            >
              {
                <data.icon
                  className={`size-6 ${
                    data.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                />
              }
            </div>
          </div>

          <div
            className={`mt-4 flex items-center ${
              data.change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {data.change >= 0 ? <ArrowUp /> : <ArrowDown />}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(data.change)}%
            </span>
            <span className="ml-3 text-sm font-medium text-gray-400">
              vs last period
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default OverviewCard;
