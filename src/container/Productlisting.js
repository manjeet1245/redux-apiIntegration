import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'
import axios from 'axios'
import Productcomponent from './Productcomponent'

const Productlisting = () => {
  
    const dispatch =useDispatch();

    const fetchProduct = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProduct();
    },[]);
  return (
    <div>
       <Productcomponent />
    </div>
  )
}

export default Productlisting