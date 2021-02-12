import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardDeck, CardColumns } from 'reactstrap'

import './styles.scss';

//Card de produtos
export default function Product({ comic }) {
    const { title, pageCount, thumbnail } = comic;

    function priceComic(){
        return Math.random() * 10;
    }
    
    return (
        <Card className='product-container'>
            <CardImg top width="100%" src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt="Imagem produto" />
            <CardBody className='product-body'>
                <CardTitle className='text-center'>{title}</CardTitle>
                <span className='old-price'>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(priceComic())}</span>
                <br></br>
                <strong className='preco'>{new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(priceComic())}</strong>
                à vista no cartão
                <br></br>
                <small className='text-muted'>12x sem juros</small>
            </CardBody>
        </Card>
    )
}
