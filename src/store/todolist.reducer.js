const initialState = {
    todos:['get car','pay bills','forget loans']
}

function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReducer;