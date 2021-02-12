import React, { useEffect, useState } from 'react'

import Product from '../../components/Product';
import api from '../../config/api';
import './styles.scss'

//Produtos de destaques pegando dados do mochAPI.io

export default function Spotlight({comics}) {
    const [products, setProducts] = useState([]);


    return (
        <div className='spotlight-container'>
            <div className="align-spotlight mt-md-3">
            <h4 className='text-center destaques'>Destaques</h4>
            </div>
            <div className="spotlight-row">
            {comics && comics.length > 0 && comics.map(comic => (
                <Product comic={comic} />
            ))}
            </div>
        </div>
    )
}
