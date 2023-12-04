import {createSlice} from "@reduxjs/toolkit"
import type{PayloadAction} from "@reduxjs/toolkit"

interface ModalState{
regsiterModal:boolean,
loginModal:boolean,
elementModal:boolean
}

const initialState :ModalState = {
regsiterModal:false,
loginModal:false,
elementModal:false,
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
        },
        elementModalFunc:(state)=>{
            state.elementModal=!state.elementModal
        }
    }

})


export const {registerModalFunc,loginModalFunc,elementModalFunc} = modalSlice.actions

export default modalSlice.reducer