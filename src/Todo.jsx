import React from 'react'

function Todo(prop) {
  return (
            <li className="border border-2 p-2 my-2">
                {prop.todo}
                <button onClick={()=>{prop.delTodo(prop.i)}}>Delete</button>
            </li>
  )
}

export default Todo