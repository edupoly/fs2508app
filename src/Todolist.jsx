import React from 'react';
function Todolist(){
    //state
    var [todos,setTodos] = React.useState([])
    var [newtodo,setnewtodo] = React.useState('')
    //action
    function addTodo(){
        // var ntodo = document.getElementById("d1").value;
        setTodos([...todos,newtodo])
    }
    function delTodo(ind){
        var temp = [...todos];
        temp.splice(ind,1)
        setTodos([...temp])
    }
    React.useEffect(()=>{
        //the work tobe done in mounting time as well as updation time
        console.log("Chiranjeevi");
    })
    React.useEffect(()=>{
        //only on mounting time
        console.log("Jai Balayya");
        return ()=>{
            //only on unmounting time
        }
    },[])
    //UI
    return (
        <div className='m-3 p-5 border border-danger'>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <br />
            <ul className='p-0 list-unstyled'>
                {!todos && <i>Please add Todo</i>}
                {
                    todos?.map((todo,i)=>{
                        return <li className="border border-2 p-2 my-2">
                            {todo}
                            <button onClick={()=>{delTodo(i)}}>Delete</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;