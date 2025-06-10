import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    var [allProducts,setAllProducts ] = React.useState([])
    React.useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setAllProducts([...data.products]))
    },[])
  return (
    <div>
        <h2>Products</h2>
        <ul className='d-flex flex-wrap'>
            {
                allProducts.map((product)=>{
                    return <Link to={`/productDetails/${product.id}`}>
                        <li className='d-flex flex-column m-3 align-items-center'>
                            <img src={product.images[0]} style={{width:"150px"}} alt="" />
                            {product.title.slice(0,15)}
                            <b>Rs.{Math.round(product.price-(product.discountPercentage*product.price/100))}</b>
                            <s><i>M.R.P.{product.price}</i></s>
                        </li>
                    </Link>
                })
            }
        </ul>
    </div>
  )
}

export default Products