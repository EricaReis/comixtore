import React, { useEffect, useState } from 'react'

import Product from '../../components/Product';
import api from '../../config/api';
import './styles.scss'

//Produtos de destaques pegando dados do mochAPI.io

export default function Spotlight() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts(){
        try {
            const { data } = await api.get("destaques")

            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='spotlight-container'>
            <div className="align-spotlight mt-md-3">
            <h4 className='text-center destaques'>Destaques</h4>
            </div>
            <div className="spotlight-row">
            {products && products.map(product => (
                <Product product={product} />
            ))}
            </div>
        </div>
    )
}
