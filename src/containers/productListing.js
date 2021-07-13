import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/productActions';
import axios from 'axios';
import ProductComponent from './productComponent';

const ProductListing = () =>{
    const products = useSelector((store) => store);
    const dispatch = useDispatch();
        const fetchProducts = async () =>{
            const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
                console.log('Err',err);
            });
            dispatch(setProduct(response.data));
        }
        useEffect(() => {
            fetchProducts();
        },[]);
    console.log("products: ", products);
    return(
        <div className = 'ui grid container' style={{marginTop:'10px'}}>
            <ProductComponent/>
        </div>
    );
}; 

export default ProductListing;