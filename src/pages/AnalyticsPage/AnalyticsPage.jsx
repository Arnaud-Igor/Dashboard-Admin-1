import AIPoweredInsights from "../../components/AIPoweredInsights/AIPoweredInsights";
import ChannelPerformance from "../../components/ChannelPerformance/ChannelPerformance";
import CustomerSegmentation from "../../components/CustomerSegmentation/CustomerSegmentation";
import Header from "../../components/Header/Header";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import ProductPerformance from "../../components/ProductPerformance/ProductPerformance";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import UserRetention from "../../components/UserRetention/UserRetention";

function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <OverviewCard />
        <RevenueChart />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
}

export default AnalyticsPage;
