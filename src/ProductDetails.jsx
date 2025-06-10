import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    var params = useParams();
    var [ details,setDetails ] = React.useState()
    React.useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res=>res.json())
        .then(data=>setDetails({...data}))
    },[])
  return (
    <div>
        <h1>{details?.title}</h1>
        <img src={details?.thumbnail} alt="" />
        <p>{details?.description}</p>
    </div>
  )
}

export default ProductDetails