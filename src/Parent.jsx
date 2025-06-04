import React from "react";
import Child from "./Child";

function Parent(){
    var x = 100;
    var [vy,setvy] = React.useState()

    function abc(valy){
        setvy(valy)
    }
    return <div  className='p-2 border border-4 border-danger'>
        <h1>Parent:{vy}</h1>
        <Child abc={abc}>{x}</Child>
    </div>
}
export default Parent;