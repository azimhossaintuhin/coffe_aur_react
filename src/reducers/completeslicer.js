import { createSlice } from "@reduxjs/toolkit";

const initialState = "0"


 const completeSlice =createSlice({
    name: 'completes',
    initialState,
    reducers:{
        removeTodo:(state , action)=>{
            return state.filter(todo => todo.id !== action.payload)
        }
    }
       
 })

 export const {removeTodo} = completeSlice.actions
export const completeReducer =  completeSlice.reducer