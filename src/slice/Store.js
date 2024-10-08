import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';

const store = configureStore({
    reducer:{
        products:ProductReducer
    }
})

export default store;