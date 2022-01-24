import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import firebaseSlice from "./firebaseSlice";

export default configureStore({
    reducer: {
        user: firebaseSlice,
        cart: cartReducer

    }
})