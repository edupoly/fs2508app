import React from 'react';
import Todo from './Todo';
function Todolist(){

    var [todos,setTodos] = React.useState([])
    var [newtodo,setnewtodo] = React.useState('')

    function addTodo(){

        setTodos([...todos,newtodo])
    }
    function delTodo(ind){
        var temp = [...todos];
        temp.splice(ind,1)
        setTodos([...temp])
    }

    return (
        <div className='m-3 p-5 border border-danger'>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <br />
            <ul className='p-0 list-unstyled'>
                {!todos && <i>Please add Todo</i>}
                {
                    todos?.map((todo,i)=>{
                        return <Todo todo={todo} i={i} delTodo={delTodo}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;