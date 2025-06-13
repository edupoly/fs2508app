import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
    var {count} = useSelector(state=>state.counterR)
    var dispatch = useDispatch()
    return (
        <div className='border border-5 border-info p-2 m-2'>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
    )
}

export default Counter