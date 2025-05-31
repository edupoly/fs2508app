import React from "react"
function Counter(props){
    console.log(props);
    var [counter,setCounter] = React.useState(props.i)
    function inc(){
        setCounter(counter+props.iv)
    }
    function dec(){
        setCounter(counter+props.dv)
    }
    return(
        <div className="border border-danger p-3 m-3">
            <h1>Counter: {counter} </h1>
            <button onClick={()=>{inc()}}>Inc</button>
            <button onClick={()=>{dec()}}>Dec</button>
        </div>
    )
}
export default Counter