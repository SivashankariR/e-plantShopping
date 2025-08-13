import { createSlice } from '@reduxjs/toolkit';

export const ContextSlice = createSlice({
  name: 'context',
  initialState: {
    cartVisible: false, 
    plantsVisible: true
  },
  reducers: {
    showCart: (state, action) => {
        state.cartVisible =true;
        state.plantsVisible = false;
    },
    showPlants: (state, action) => {
        state.cartVisible =false;
        state.plantsVisible = true;
    }
}
});

export const { showCart, showPlants } = ContextSlice.actions;

export default ContextSlice.reducer;