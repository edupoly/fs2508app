import React from 'react'
import { connect } from 'react-redux';
import { addTodoAction } from './store/actioncreators';
function Todolist(props) {
    console.log(props);
    console.log("todolist component rendered");
  return (
    <div className="border border-5 border-info p-3 m-3">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{props.addTodoFn(document.getElementById("d1").value)}}>Add Todo</button>
        <ul>
            {
                props.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

function mapStateToProps(state){return state.todoReducer}
function mapDispatchToProps(dispatch){
    return {
        addTodoFn:(ntd)=>{dispatch(addTodoAction(ntd))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolist)