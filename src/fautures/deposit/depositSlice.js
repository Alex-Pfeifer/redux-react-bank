import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "balancePlus",
    initialState: {
        balance: 0,
    },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
        }
    }
})

export default userSlice.reducer;
export const {deposit} = userSlice.actions;