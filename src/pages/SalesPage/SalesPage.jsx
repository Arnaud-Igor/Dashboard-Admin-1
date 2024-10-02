import {
  ChartNoAxesCombined,
  CreditCard,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import StatCard from "../../components/StatCard/StatCard";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import SalesCategoryChart from "../../components/SalesCategortChart/SalesCategortChart";
import DailySalesTrend from "../../components/DailySalesTrend/DailySalesTrend";
import SalesAreaChart from "../../components/SalesAreaChart/SalesAreaChart";

function SalesPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Sales Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            value="$7,309,345"
            icon={DollarSign}
            color="#6366f1"
          />
          <StatCard
            name="Average Order Value"
            value="$94,234"
            icon={ShoppingCart}
            color="#8b5cf6"
          />
          <StatCard
            name="Conversion Rate"
            value="34.5%"
            icon={ChartNoAxesCombined}
            color="#ec4899"
          />
          <StatCard
            name="Sales Growth"
            value="52.1%"
            icon={CreditCard}
            color="#10b981"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesAreaChart />
          <SalesCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
}

export default SalesPage;
