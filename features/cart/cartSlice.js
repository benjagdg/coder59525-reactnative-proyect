import { createSlice } from "@reduxjs/toolkit";
import { cartTotalAmount } from "../../services/functions";

export const cartSlice = createSlice({
  name: "cart",
  initialState:{
    value:{
      cartItems: [],
      cartTotal: 0,
      cartLength: 0,
      cartRedirect: false
    }
  },
  reducers: {
    addItemToCart: (state, action) => {
      const productExistsInCart = state.value.cartItems.find(item => item.id === action.payload.id);
      if(productExistsInCart){
        if(productExistsInCart.quantity >= action.payload.stock){
          throw new Error('Stock insuficiente');
        }
        productExistsInCart.quantity++;
      }else{
        state.value.cartItems.push({...action.payload, quantity: 1});
        state.value.cartLength = state.value.cartLength + 1;
      }
      state.value.cartTotal = cartTotalAmount(state.value.cartItems);
    },

    removeItemQuantityFromCart: (state, action) => {
      const productExistsInCart = state.value.cartItems.find(item => item.id === action.payload);
      if(productExistsInCart.quantity > 1){
        productExistsInCart.quantity--;
      }else{
        state.value.cartItems = state.value.cartItems.filter(item => item.id !== action.payload);
        state.value.cartLength = state.value.cartLength - 1;
      }
      state.value.cartTotal = cartTotalAmount(state.value.cartItems);
    },
    
    addItemQuantityToCart: (state, action) => {
      const productExistsInCart = state.value.cartItems.find(item => item.id === action.payload);
      if(productExistsInCart.quantity >= productExistsInCart.stock){
        throw new Error('Stock insuficiente');
      }
      productExistsInCart.quantity++;
      state.value.cartTotal = cartTotalAmount(state.value.cartItems);
    },

    cleanCart: (state) => {
      state.value.cartItems = [];
      state.value.cartTotal = 0;
      state.value.cartLength = 0;
    },

    setCartRedirect: (state) => {
      state.value.cartRedirect = !state.value.cartRedirect;
    }

  }
});

export const { addItemToCart, removeItemQuantityFromCart, addItemQuantityToCart, cleanCart, setCartRedirect } = cartSlice.actions;
export default cartSlice.reducer;
