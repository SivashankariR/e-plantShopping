import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        let plant = action.payload;
        if(state.items.find(item => item.id === plant.id)) {
            state.items = state.items.map(item => 
                item.id === action.payload.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
            );
        }
        else { // Set initial quantity to 1
            state.items.push({...action.payload, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
        state.items = state.items.map(item => 
            item.id === action.payload.id 
            ? {...item, quantity: action.payload.quantity} 
            : item
        );    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
