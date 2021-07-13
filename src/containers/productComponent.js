import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../App.css';

const ProductComponent = () =>{
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className='col-md-3' style={{marginBottom:'25px'}} key={id}>
                <Link to = {`product/${id}`} >
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='card-images' style={{backgroundImage:`url(${image})`}}>
                            
                        </div>
                        <div className='m-3'>
                                <div className='card-titles'>{title}</div>
                                <div className='meta price'>$ {price}</div> 
                                <div></div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });
    return(
        <div className='container'>
            <div className='row m-0'>{renderList}</div>
        </div>
    );
};

export default ProductComponent;