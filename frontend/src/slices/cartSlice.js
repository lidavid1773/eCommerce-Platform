import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const formatDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const itemExists = state.cartItems.find(
        (currentItem) => currentItem._id === item._id
      );

      // Update item's quantity if it exists (item contains a qty field)
      if (itemExists) {
        state.cartItems = state.cartItems.map((currentItem) =>
          currentItem._id === itemExists._id ? item : currentItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate all item's price
      state.itemsPrice = formatDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // Calculate shipping price ($10 or free if over $100)
      state.shippingPrice = formatDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calculate tax price (15%)
      state.taxPrice = formatDecimals(
        Number(0.15 * state.itemsPrice).toFixed(2)
      );

      // Calculate total price
      state.totalPrice = Number(
        state.itemsPrice + Number(state.shippingPrice) + Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
