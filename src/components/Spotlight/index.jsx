import React, { useState } from 'react'

import Product from '../../components/Product';
import './styles.scss'

//Produtos de destaques pegando dados do mochAPI.io

export default function Spotlight({comics, lastComicTableElementRef}) {
    const [products, setProducts] = useState([]);


    return (
        <div className='spotlight-container'>
            <div className="align-spotlight mt-md-3">
            <h4 className='text-center destaques'>Spotlight</h4>
            </div>
            <div className="spotlight-row">
            {comics && comics.length > 0 && comics.map((comic, index) => (
                <Product index={index} length={comics.length} lastComicTableElementRef={lastComicTableElementRef} key={comic.id} comic={comic} />
            ))}
            </div>
        </div>
    )
}
