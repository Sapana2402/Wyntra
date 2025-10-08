import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./index";

export default combineReducers({
    auth: authReducer,
});
