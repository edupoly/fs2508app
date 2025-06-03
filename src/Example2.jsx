import React from 'react'

function Example2(props,refs) {

  return (
    <div className='p-5 border border-4 border-info'>
        Example2
        <input type="text" ref={refs}/>
    </div>
  )
}

export default React.forwardRef(Example2)