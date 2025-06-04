import React from 'react'

function Todo(prop) {
  React.useEffect(()=>{
    console.log("todo comp rendered");
  })
  return (
            <li className="border border-2 p-2 my-2">
                {prop.todo}
                <button onClick={()=>{prop.delTodo(prop.i)}}>Delete</button>
            </li>
  )
}

export default React.memo(Todo)