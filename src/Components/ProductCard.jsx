import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reducefromCart } from "../Redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems = [] } = useSelector((store) => store.cart); // Ensure cartItems is always an array

  // Fix: getProduct now returns the found item
  const getProduct = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  const foundProduct = getProduct(product.id);

  return (
    <div className="bg-gray-200 shadow-lg rounded-xl p-5 w-75 h-auto transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-30 object-contain mix-blend-multiply rounded-md"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold text-gray-900 truncate mt-3">
        {product.title}
      </h3>
      <p className="text-gray-500 text-sm mt-1">{product.category}</p>
      <p className="text-xl font-bold text-green-700 mt-2">${product.price}</p>

      {/* Add to Cart Button */}
      {foundProduct ? (
        <div className="flex items-center justify-evenly w-full  p-0.5 mt-3">
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 font-bold rounded-l-lg 
                 hover:bg-gray-400 transition duration-200 cursor-pointer"
            onClick={() => dispatch(reducefromCart(product))}
          >
            −
          </button>
          <p className="w-14 text-center text-lg font-semibold bg-white py-2 border-x border-gray-300">
            {foundProduct.quantity}
          </p>
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 font-bold rounded-r-lg 
                 hover:bg-gray-400 transition duration-200 cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-500 
               text-white font-medium rounded-lg shadow-md hover:from-blue-600 
               hover:to-indigo-600 transition duration-300 cursor-pointer"
          onClick={() => dispatch(addToCart(product))}
        >
          🛒 Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
