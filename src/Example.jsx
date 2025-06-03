import React from 'react'
import Example2 from './Example2';

function Example() {
    var ref1 = React.useRef();
    var ref2 = React.useRef();
    var ref3 = React.useRef();
    var ref4 = React.useRef();
    function abc(){
        var x = ref1.current.value;
        ref2.current.innerText=x
        ref4.current.focus()
    }
    React.useEffect(()=>{
        ref1.current.focus();
    },[])
  return (
    <div className='p-5 border border-danger'>
        <h1>understand useRef</h1>
        <input type="text" ref={ref1} onKeyUp={(e)=>{
            if(e.key==='Enter'){
                ref3.current.focus()
            }
        }}/>
        <button ref={ref3} onClick={()=>{abc()}}>Show Text</button>
        <h2 ref={ref2}></h2>
        <Example2 x={29} ref={ref4}></Example2>
    </div>
  )
}

export default Example
