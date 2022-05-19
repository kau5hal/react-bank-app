import {createSlice,PayloadAction} from '@reduxjs/toolkit';

const initialState = 0;

export const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        DEPOSIT:(state,action:PayloadAction<number>) => {
            return state + action.payload 
        },
        WITHDRAW:(state,action:PayloadAction<number>) => {
            return state - action.payload 
        }
    },
})

export const {DEPOSIT, WITHDRAW} = accountSlice.actions;
export default accountSlice.reducer;