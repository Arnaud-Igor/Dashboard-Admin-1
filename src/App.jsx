import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SideBar from "./components/SideBar/SideBar";
import UsersPage from "./pages/UsersPage/UsersPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Footer from "./components/Footer/Footer";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <>
      <div className="h-screen flex text-gray-100 overflow-hidden bg-gray-800">
        <SideBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
