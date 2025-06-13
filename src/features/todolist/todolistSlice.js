import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todolist:["carwash","paybills","goto goa"]
}

export const todolistSlice = createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action);
            state.todolist.push(action.payload)
        },
        deleteTodo:()=>{}
    }
})

export const {addTodo,deleteTodo} = todolistSlice.actions
export default todolistSlice.reducer