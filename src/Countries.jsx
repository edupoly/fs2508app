import React from 'react'

function Countries() {

    var [products,setProducts]=React.useState([]);

    React.useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // products = data;
            setProducts([...data])
        })
    },[])

  return (
    <div className='m-3 p-5 border border-danger'>
        <h2>Products</h2>
        <ul>
            {
                products.map((p)=>{
                    return <li>{p.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Countries