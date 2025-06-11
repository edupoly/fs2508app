import React from 'react'
import { connect } from 'react-redux';
function Todolist(props) {
    console.log("todolist component rendered");
  return (
    <div className="border border-5 border-info p-3 m-3">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:document.getElementById("d1").value})}}>Add Todo</button>
        <ul>
            {
                props.todoReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect((store)=>{return store})(Todolist)