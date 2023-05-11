import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bill from "./pages/Bill";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Customers from "./pages/Customers";
import StatislicPage from "./pages/StatislicPage";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/statislic" element={<StatislicPage />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
