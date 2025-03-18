import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsThunk } from "../Redux/productSlice";
import ProductCard from "../Components/ProductCard";
const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      {loading && (
        <div className="text-center text-blue-500 text-lg">Loading...</div>
      )}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Shop Your Favorite Products 🛍️
      </h1>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {products?.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
