import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

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
          currentItem._id === itemExists._id
            ? { ...currentItem, qty: currentItem.qty + item.qty }
            : currentItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
