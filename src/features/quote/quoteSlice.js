import {createSlice} from "@reduxjs/toolkit";
import {fetchQuotes} from "../api/asyncQuoteAction.js";

const quoteSlice = createSlice({
    name: "quote",
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuotes.pending, () => 'Pending ...')
            .addCase(fetchQuotes.rejected, () => 'Failed to fetsch quote date! ...')
            .addCase(fetchQuotes.fulfilled, (state, action) => action.payload)



    },
})

export const {addQuote} = quoteSlice.actions;
export default quoteSlice.reducer;