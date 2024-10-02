import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import { CircleCheckBig, Clock, DollarSign, ShoppingBag } from "lucide-react";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import DailyOrderChart from "../../components/DailyOrderChart/DailyOrderChart";
import OrderStatusDistribution from "../../components/OrderStatusDistribution/OrderStatusDistribution";

function OrdersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Orders"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            value="1,200"
            icon={ShoppingBag}
            color="#6366f1"
          />
          <StatCard
            name="Pending Orders"
            value="56"
            icon={Clock}
            color="#f59e0b"
          />
          <StatCard
            name="Completed Orders"
            value="5,597"
            icon={CircleCheckBig}
            color="#ec4899"
          />
          <StatCard
            name="Total Revenue"
            value="$72,000"
            icon={DollarSign}
            color="#10b981"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <DailyOrderChart />
          <OrderStatusDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
}

export default OrdersPage;
