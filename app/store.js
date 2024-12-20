import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import { shopApi } from "../services/shopService";
import cartReducer from "../features/cart/cartSlice";
import { orderApi } from "../services/orderService";
import { authApi } from "../services/authService";
import authReducer from "../features/auth/authSlice";
import { userApi } from "../services/userService";

export const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(shopApi.middleware)
    .concat(orderApi.middleware)
    .concat(authApi.middleware)
    .concat(userApi.middleware)
});