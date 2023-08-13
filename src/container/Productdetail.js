import React,{useEffect} from 'react'
import axios from 'axios'
// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productAction';
const Productdetail = () => {
  const product = useSelector((state) => state.product)
  const {productId} = useParams();
  const dispatch = useDispatch
  console.log(product);

  const fetchProductDetail = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    console.log(response.data);
    dispatch(selectedProducts(response.data));

  }

  useEffect(() => {
    if(productId && productId!== "")
    {
      fetchProductDetail();
    }
},[productId]);

  return (
    <div></div>
  )
}

export default Productdetail