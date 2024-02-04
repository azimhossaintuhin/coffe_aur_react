import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "../reducers/todoslicer";
import { completeReducer } from "../reducers/completeslicer";


const store =  configureStore({
    reducer:{
        todo : todoReducer,
        newtodo: completeReducer,
    },
    devTools: true,

})

export default store;
