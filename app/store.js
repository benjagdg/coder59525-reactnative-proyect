import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shopReducer: shopReducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat()
});