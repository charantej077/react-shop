import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';


const ProductDetails = () =>{
    const product = useSelector((state)=>state.product);
    const {image, title, price, category, description} = product; 
    const productId = useParams();
    const pId = productId.productId;
    const dispatch = useDispatch();
    console.log(product);
 
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${pId}`)
        .catch((err) => {
            console.log('Err', err);
        });
        console.log(response);
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return() => {
            dispatch(removeSelectedProduct());
        };
    },[productId])
    return(
        <div>{Object.keys(product).length === 0 ? (
            <div style={{position:'absolute',top:'50%', left: '50%', transform:'translate(-50%,-50%)'}}>Loading...</div>
        ): (
            <div className='container mt-5'>
                <div className='row m-0 pt-5'>
                    <div className='col-md-6'>
                        <img src={image} style={{height:'50vh'}}/>
                    </div>
                    <div className='col-md-6'>
                        <div><b>{title}</b></div><br/>
                        <div style={{color:'green'}}>${price}</div><br/>
                        <div>{category}</div><br/>
                        <div>{description}</div><br/>
                        <div className='row m-0'>
                            <div className='col-6'>
                                <button className='btn btn-lg btn-block btn-success'>Buy Now</button>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-lg btn-block btn-warning' style={{color:'#fff'}}>Add to cart</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )};
            
        </div>
    );
};

export default ProductDetails;