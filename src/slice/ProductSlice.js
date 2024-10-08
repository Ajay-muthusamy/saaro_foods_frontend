import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log('redux triggered', action.payload);
      state.products.push(action.payload);
      state.total += action.payload.price;
      console.log('Current products:', state.products); 
    },
    clearProducts: (state) => {
      state.products = [];
      state.total = 0;
      console.log('Products cleared. Current products:', state.products); 
    },
  },
});

export const { addProduct, clearProducts } = productSlice.actions;
export default productSlice.reducer;
