import { motion } from "framer-motion";
import StatCard from "../../components/StatCard/StatCard";
import Header from "../../components/Header/Header";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../../components/ProductTable/ProductTable";
import CategoryDistributionChart from "../../components/CategoryDistributionChart/CategoryDistributionChart";
import SalesTrendChart from "../../components/SalesTrendChart/SalesTrendChart";
function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Products"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            value="1245"
            icon={Package}
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            value="134"
            icon={TrendingUp}
            color="#8b5cf6"
          />
          <StatCard
            name="Low Stock"
            value="35"
            icon={AlertTriangle}
            color="#ec4899"
          />
          <StatCard
            name="Total Revenue"
            value="$597,895"
            icon={DollarSign}
            color="#10b981"
          />
        </motion.div>

        <ProductTable />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
