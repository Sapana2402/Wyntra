import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./index";
import cartReducer from './CratSlice'

export default combineReducers({
    auth: authReducer,
    carts: cartReducer
});
