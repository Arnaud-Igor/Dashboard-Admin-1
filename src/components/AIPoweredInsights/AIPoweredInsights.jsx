import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    insights:
      "Revenue is up 15% from last month, driven by a 12% increase in sales and a 3% increase in average order value.",
  },
  {
    icon: Users,
    color: "text-blue-500",
    insights:
      "Your customer base is growing. You have 15% more customers than last month. ",
  },
  {
    icon: ShoppingBag,
    color: "text-purple-500",
    insights:
      "Your average order value is up 3% from last month. This is driving the increase in revenue.",
  },
  {
    icon: DollarSign,
    color: "text-yellow-500",
    insights:
      "Sales are up 12% from last month. This is the main driver of the increase in revenue.",
  },
];

function AIPoweredInsights() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        AI Powered Insights
      </h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div
              className={`p-2 rounded-full ${insight.color} bg-bg-opacity-25`}
            >
              <insight.icon className="size-6" />
            </div>
            <p className="text-gray-300">{insight.insights}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AIPoweredInsights;
