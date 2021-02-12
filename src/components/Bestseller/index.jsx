import React, { useEffect, useState } from 'react'

import Product from '../Bestseller';

import api from '../../config/api';
import './styles.scss'

//Produtos de lançamentos pegando dados do mochAPI.io

export default function Bestseller() {
    const [products, setProducts] = useState([]);
  
    return (
        <div className='bestseller-container'>
            <div className="align-bestseller mt-md-3">
                
            </div>
            <div className="bestseller-row">

                {products && products.map(product => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}