import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = []

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state , action)=>{
                console.log(action)
                console.log(state)
                const  newTodo = {
                    id: nanoid(),
                    task: action.payload,
                    completed: false
                }
                state.push(newTodo)
        },
        removeTodo: (state, action)=>{
            return state.filter(todo =>todo.id !== action.payload)
            
        },
    }
})


export const {addTodo , removeTodo} = todoSlice.actions
export const todoReducer =  todoSlice.reducer