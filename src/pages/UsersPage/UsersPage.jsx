import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../../components/UsersTable/UsersTable";
import UserGrowthChart from "../../components/UserGrowthChart/UserGrowthChart";
import UserActivityHeatmap from "../../components/UserActivityHeatmap/UserActivityHeatmap";
import UserDemographics from "../../components/UserDemographics/UserDemographics";

const usersStats = {
  totalUsers: "23,456",
  newUsersToday: 567,
  activeUsers: "356",
  churnRate: "12.5%",
};

function UsersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Users"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            value={usersStats.totalUsers}
            icon={UsersIcon}
            color="#6366f1"
          />
          <StatCard
            name="New Users Today"
            value={usersStats.newUsersToday}
            icon={UserPlus}
            color="#f59e0b"
          />
          <StatCard
            name="Active Users"
            value={usersStats.activeUsers}
            icon={UserCheck}
            color="#ec4899"
          />
          <StatCard
            name="Churn Rate"
            value={usersStats.churnRate}
            icon={UserX}
            color="#10b981"
          />
        </motion.div>

        <UsersTable />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographics />
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
