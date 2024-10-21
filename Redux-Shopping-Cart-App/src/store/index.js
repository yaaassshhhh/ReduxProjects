import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice"
import uiReducer from "./ui-slice";
const store = configureStore({
    reducer : {
        auth : authReducer,
        cart : cartReducer,
        ui : uiReducer
    }
})

export default store;