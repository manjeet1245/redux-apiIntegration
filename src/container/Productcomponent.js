import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Productcomponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const renderList  =  products.map((product) => {
    return(
      <div key={product.id}>
        <Link to={`/product/${product.id}`}>
        <h1>{product.id}</h1>
        <h1>{product.title}</h1>
        <img src={product.image} alt=''/>
        </Link>
      </div>
    )
  })
  return (
    <div>
      {/* <h1>BADABDUAH</h1> */}
      {renderList}

    </div>
  )
}

export default Productcomponent