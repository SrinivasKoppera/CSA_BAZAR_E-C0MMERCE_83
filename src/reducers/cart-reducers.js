import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    decreamentCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementCount, decreamentCount } =
  cartSlice.actions;
export default cartSlice.reducer;
