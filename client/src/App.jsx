import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
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
        <Route
           path="/"
           element={
             <RouteControl>
               <HomePage />
             </RouteControl>
           }
         />
         <Route
           path="/cart"
           element={
             <RouteControl>
               <CartPage />
             </RouteControl>
           }
         />
         <Route
           path="/bill"
           element={
             <RouteControl>
               <Bill />
             </RouteControl>
           }
         />
         <Route
           path="/customers"
           element={
             <RouteControl>
               <Customers />
             </RouteControl>
           }
         />
         <Route
           path="/StatislicPage"
           element={
             <RouteControl>
               <StatislicPage />
             </RouteControl>
           }
         />
         <Route
           path="/products"
           element={
             <RouteControl>
               <ProductPage />
             </RouteControl>
           }
         />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};