import React from 'react'

function Child(props) {
    var y = 200;
    React.useEffect(()=>{
        props.abc(y)
    },[])
  return (
    <div className='p-2 border border-4 border-info'>
        <h1>Child</h1>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Child
