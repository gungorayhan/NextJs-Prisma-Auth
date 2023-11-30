import {createSlice} from "@reduxjs/toolkit"
import type{PayloadAction} from "@reduxjs/toolkit"

interface ModalState{
regsiterModal:boolean,
loginModal:boolean
}

const initialState :ModalState = {
regsiterModal:false,
loginModal:false
}  as ModalState


export const modalSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{
        //functions
        registerModalFunc:(state)=>{
            state.regsiterModal=!state.regsiterModal
        },
        loginModalFunc:(state)=>{
            state.loginModal=!state.loginModal
        }
    }

})


export const {registerModalFunc,loginModalFunc} = modalSlice.actions

export default modalSlice.reducer