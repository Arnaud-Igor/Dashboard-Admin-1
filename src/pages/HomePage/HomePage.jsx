import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../../components/SalesOverviewChart/SalesOverviewChart";
import CategoryDistributionChart from "../../components/CategoryDistributionChart/CategoryDistributionChart";
import SalesChannelChart from "../../components/SalesChannelChart/SalesChannelChart";

function HomePage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Overview"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            value="$12,345"
            icon={Zap}
            color="#6366f1"
          />
          <StatCard
            name="New Users"
            value="1,234"
            icon={Users}
            color="#8b5cf6"
          />
          <StatCard
            name="Total Products"
            value="345"
            icon={ShoppingBag}
            color="#ec4899"
          />
          <StatCard
            name="Conversion Rate"
            value="12.5%"
            icon={BarChart2}
            color="#10b981"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
