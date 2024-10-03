import Header from "../../components/Header/Header";
import Notification from "../../components/Notification/Notification";
import Profile from "../../components/Profile/Profile";
import SecuritySection from "../../components/SecuritySection/SecuritySection";

function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Settings"} />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8 space-y-8">
        <Profile />
        <Notification />
        <SecuritySection />
      </main>
    </div>
  );
}

export default SettingsPage;
