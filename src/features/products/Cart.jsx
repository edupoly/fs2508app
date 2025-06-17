import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incCartItemCount} from './productSlice'
function Cart() {
    var {cart}=useSelector(state=>state.productR)
    var dispatch = useDispatch();
  return (
    <div className='p-2 m-5'>
        <h1>Cart</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Count</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart?.map((product,i)=>{
                        return <tr>
                            <td>{i+1}</td>
                            <td>{product.title}</td>
                            <td>
                                <button>-</button>
                                <b>{product.count}</b>
                                <button onClick={()=>{dispatch(incCartItemCount(product.id))}}>+</button>
                            </td>
                            <td>{product.price*product.count}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Cart