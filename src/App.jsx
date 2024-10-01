import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="h-screen flex text-gray-100 overflow-hidden bg-gray-800">

      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
