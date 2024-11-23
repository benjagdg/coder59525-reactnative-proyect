import { createSlice } from "@reduxjs/toolkit";
import { cartTotalAmount } from "../../services/functions";

export const cartSlice = createSlice({
  name: "cart",
  initialState:{
    value:{
      cartItems: [],
      cartTotal: 0,
      cartLength: 0
    }
  },
  reducers: {
    addItemToCart: (state, action) => {
      const productExistsInCart = state.value.cartItems.find(item => item.id === action.payload.id);
      if(productExistsInCart){
        productExistsInCart.quantity++;
      }else{
        state.value.cartItems.push({...action.payload, quantity: 1});
        state.value.cartLength = state.value.cartLength + 1;
      }
      state.value.cartTotal = cartTotalAmount(state.value.cartItems);
    }
  }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
