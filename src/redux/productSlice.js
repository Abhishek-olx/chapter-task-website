import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products.json';

const initialState = {
  allProducts: products.products,
  filteredProducts: products.products,
  selectedSizes: [],
  sortOrder: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterBySize: (state, action) => {
      state.selectedSizes = action.payload;
      state.filteredProducts = state.allProducts.filter(product =>
        action.payload.length === 0 ||
        product.availableSizes.some(size => action.payload.includes(size))
      );
    },
    sortByPrice: (state, action) => {
      state.sortOrder = action.payload;
      state.filteredProducts.sort((a, b) => 
        action.payload === 'asc' ? a.price - b.price : b.price - a.price
      );
    },
  },
});

export const { filterBySize, sortByPrice } = productSlice.actions;
export default productSlice.reducer;
