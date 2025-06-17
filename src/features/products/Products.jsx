import React from 'react'
import { useGetAllProductsQuery } from '../../services/product.service'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './productSlice';

function Products() {
    var {data,isLoading}=useGetAllProductsQuery()
    var {cart} = useSelector(state=>state.productR)
    
    var dispatch = useDispatch();
  return (
    <div className='p-2 m-2'>
        <b>{isLoading &&
            "Loading..."
            }</b>
        <ul className='d-flex flex-wrap justify-content-evenly'>
            {!isLoading && data.map((prod)=>{
            return  <div class="card p-2 m-2" style={{width: "18rem"}}>
                        <img src={prod.image} class="card-img-top" style={{width:"100%",height:"300px"}} alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">{prod.title.slice(0,20)}</h5>
                        <p class="card-text">{prod.description.slice(0,100)}</p>
                        {
                            cart.find(product=>{
                                if(prod.id===product.id){return true}
                            })?(<button class="btn btn-warning" onClick={()=>{dispatch(addToCart())}}>Go To Cart</button>):(<button class="btn btn-primary" onClick={()=>{dispatch(addToCart({...prod,count:1}))}}>Add To Cart</button>)
                        }
                        
                        </div>
                    </div>
        })}</ul>
    </div>
  )
}

export default Products