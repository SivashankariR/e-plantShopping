import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import contextReducer from './ContextSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        context: contextReducer
    },
});
export default store
