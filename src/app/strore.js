import {configureStore} from "@reduxjs/toolkit";
import balanceMinus from "../fautures/withdraw/withdrawSlice.js";
import balancePlus from "../fautures/withdraw/withdrawSlice.js";

export const store = configureStore({
    reducer: {
        balancePlus, balanceMinus
    }
});