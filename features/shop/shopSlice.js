import { createSlice } from "@reduxjs/toolkit";
  
export const shopSlice = createSlice({
  name: "shop",
  initialState:{
    value:{
      categorySelected: "",
      productId: null,
      productsVisited: []
    }
  },
  reducers: {
    setCategory: (state, action) => {
      state.value.categorySelected = action.payload;
    },
    setProductId: (state, action) => {
      state.value.productId = action.payload;
    },
    setProductsVisited: (state, action) => {
      state.value.productsVisited = action.payload;
    }
  }
});

export const { setCategory, setProductId, setProductsVisited } = shopSlice.actions;
export default shopSlice.reducer;