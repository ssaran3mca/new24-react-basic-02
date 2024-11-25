import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";

const appStore = configureStore({
  reducer: {
    carts: cartReducer,
  },
});

export default appStore;
