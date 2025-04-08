import {createSlice} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "balanceMinus",
    initialState: {
        balance: 0,
    },
    reducers:{
        withdraw: (state, action) => {
            state.balance < action.payload ? state.balance : state.balance - action.payload;
        }
    }
})

export default userSlice.reducer;
export const {withdraw} = userSlice.actions;