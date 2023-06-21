export const formatDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate all item's price
  state.itemsPrice = formatDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price ($10 or free if over $100)
  state.shippingPrice = formatDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate tax price (15%)
  state.taxPrice = formatDecimals(Number(0.15 * state.itemsPrice).toFixed(2));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
