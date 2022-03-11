import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    rows : [],
    userDetails : {}
}

export const customReducer = createReducer(initialState,{
    addItem : (state , action)=>{
        state.rows = [...state.rows , action.payload];
    },

    deleteItem : (state ,action)=>{
        state.rows = state.rows.filter((_,index) => index!== action.payload);
    },

    addUser :(state , action)=>{
        state.userDetails = {...state.userDetails , ...action.payload};
    },

    toggleLogin :(state)=>{
        state.userDetails.isLogin = !state.userDetails.isLogin;
    }
})

