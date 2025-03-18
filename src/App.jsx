import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import UserPage from "./Pages/UserPage";
import { useSelector } from "react-redux";

function App() {
  const { totalQuantity } = useSelector((store) => store.cart);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800">
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-gray-900 shadow-lg px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold text-white hover:text-amber-400 transition duration-300"
          >
            🛍️ Shopify
          </NavLink>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <NavLink
              to="/CartPage"
              className="px-6 py-2 bg-amber-700 text-white font-medium rounded-lg shadow-md 
                      hover:bg-amber-600 hover:scale-105 transition duration-300 flex items-center space-x-2"
            >
              <span>🛒</span>
              <span>View Cart ({totalQuantity}) </span>
            </NavLink>

            <NavLink
              to="/UserPage"
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md 
                      hover:bg-blue-600 hover:scale-105 transition duration-300 flex items-center space-x-2"
            >
              <span>👤</span>
              <span>User Info</span>
            </NavLink>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
