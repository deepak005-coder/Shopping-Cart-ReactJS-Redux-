import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const addedProduct = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === addedProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartItems.push({
          ...addedProduct,
          quantity: 1,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += addedProduct.price;
    },
    reducefromCart: (state, action) => {
      const productToBeRemoved = action.payload; // Get product ID from action payload
      const existingProduct = state.cartItems.find(
        (item) => item.id === productToBeRemoved.id
      );
      //console.log(existingProduct);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        state.totalPrice -= existingProduct.price;
        state.totalQuantity -= 1;
      } else {
        // If quantity reaches 0, remove the product completely
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productToBeRemoved.id
        );
        state.totalPrice -= existingProduct.price;
        state.totalQuantity -= 1;
      }

      //console.log(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== product.id;
      });
      state.totalPrice -= product.price;
      state.totalQuantity -= product.quantity;
    },
  },
});
export const { addToCart, reducefromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
