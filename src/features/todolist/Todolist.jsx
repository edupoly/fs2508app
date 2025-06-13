import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice'

function Todolist() {
    var {todolist} = useSelector(state=>state.todolistR)
    var dispatch = useDispatch()

  return (
    <div className='border border-5 border-info p-2 m-2'>
        <h1>Todolist</h1>
        <input type="text" id='d1'/>
        <button onClick={()=>{dispatch(addTodo(document.getElementById('d1').value))}}>Add Todo</button>
        <ul>
            {
                todolist.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist