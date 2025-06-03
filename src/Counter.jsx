import React, { useReducer } from 'react'

function reducer(state,action){
    console.log("Reducer called",state,action);
    if(action.type=='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
}
const inititalState={
    count:0
}
function Counter() {
    var [state,dispatch] = useReducer(reducer,inititalState)
  return (
    <div className='p-2 border border-2 border-success'>
        <h1>Counter:{state.count}</h1>
        <button class="btn btn-outline-primary" onClick={()=>{dispatch({type:'INC'})}}>Increment</button>
        <button class="btn btn-outline-danger" onClick={()=>{dispatch({type:'DEC'})}}> Decrement</button>
        
    </div>
  )
}

export default Counter