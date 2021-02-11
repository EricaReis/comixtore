import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardDeck, CardColumns } from 'reactstrap'

import './styles.scss';

//Card de produtos
export default function Product({ product }) {
    const { name, price, promotionalprice, img } = product;
    return (
        <Card className='product-container'>
            <CardImg top width="100%" src={img} alt="Imagem produto" />
            <CardBody className='product-body'>
                <CardTitle className='text-center'>{name}</CardTitle>
                <span className='old-price'>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price)}</span>
                <br></br>
                <strong className='preco'>{new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(promotionalprice)}</strong>
                à vista no cartão
                <br></br>
                <small className='text-muted'>12x sem juros</small>
            </CardBody>
        </Card>
    )
}
