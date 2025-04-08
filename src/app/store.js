import {configureStore} from "@reduxjs/toolkit";
import balance from "../features/account/balanceSlice.js";

export const store = configureStore({
    reducer: {
        balance
    },
})