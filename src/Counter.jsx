import React from "react"
function Counter(){
    var [counter,setCounter] = React.useState(0)
    function inc(){
        setCounter(counter+1)
    }
    return(
        <div className="border border-danger p-3 m-3">
            <h1>Counter: {counter} </h1>
            <button onClick={()=>{inc()}}>Inc</button>
            <button>Dec</button>
        </div>
    )
}
export default Counter