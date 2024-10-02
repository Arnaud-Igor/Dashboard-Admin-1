import Header from "../../components/Header/Header";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import RevenueChart from "../../components/RevenueChart/RevenueChart";

function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <OverviewCard />

        <RevenueChart />
      </main>
    </div>
  );
}

export default AnalyticsPage;
