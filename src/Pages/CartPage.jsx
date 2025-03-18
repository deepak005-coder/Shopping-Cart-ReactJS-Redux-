import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reducefromCart, removeFromCart } from "../Redux/cartSlice";
const CartPage = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  // If cart is empty, show message
  if (cartItems.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
    );
  }

  return (
    <div className="flex flex-col  bg-gray-800 md:flex-row gap-4  p-6 bg-gray-100 min-h-screen align-items-center justify-center">
      {/* Left Section - Cart Items */}
      <div className="w-full bg-gray-200 md:w-2/3  shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>

        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between  border-b pb-4 mb-4"
          >
            {/* Product Image & Details */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">₹{item.price}</p>
                <button
                  // onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-sm mt-2 hover:underline cursor-pointer"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center">
              <button
                className={`px-2 py-1 border rounded-l cursor-pointer ${
                  item.quantity === 1 ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                disabled={item.quantity == 1}
                // style={
                //   item.quantity === 1
                //     ? { backgroundColor: "#d9d6d6", cursor: "not-allowed" }
                //     : {}
                // }
                onClick={() => dispatch(reducefromCart(item))}
              >
                -
              </button>
              <p className="px-3">{item.quantity}</p>
              <button
                className="px-2 py-1 border rounded-r cursor-pointer"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section - Price Summary */}
      <div className="hidden md:block h-80 sticky top-0 w-full max-w-[350px] bg-gray-200  rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Price Details</h2>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Price ({totalQuantity} items)</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-green-600">
            <span>Discount</span>
            {totalPrice < 200 ? (
              <span style={{ color: "red" }}>
                - ₹50 (min ₹200 add more items)
              </span>
            ) : (
              <span>- ₹50 </span>
            )}
          </p>
          <p className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </p>
          <hr />
          <p className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>
              ₹
              {totalPrice >= 200
                ? (totalPrice - 50).toFixed(2)
                : totalPrice.toFixed(2)}
            </span>
          </p>

          <button className="w-full bg-yellow-500 text-white py-2 mt-4 rounded-lg cursor-pointer hover:bg-yellow-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
