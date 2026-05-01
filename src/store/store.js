import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart-reducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
