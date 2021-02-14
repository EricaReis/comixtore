import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Card, CardImg, CardBody, CardTitle, CardDeck, CardColumns } from 'reactstrap'
import formatmoney from '../../common/formatmoney';
import Flag from '../Flag';

import './styles.scss';


//Card de produtos
export default function Product({ comic }) {
    const { title, pageCount, thumbnail, id, rare, price, oldprice } = comic;
    const history = useHistory();
    
    return (
        <Card className='product-container'>
            {rare && <Flag />}
            <CardImg top width="100%" src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt="Imagem produto" />
            <CardBody className='product-body'>
                <CardTitle className='text-center'>{title}</CardTitle>
                <span className='old-price'>{formatmoney(oldprice)}</span>
                <strong className='price'>{formatmoney(price)}</strong>
                <br></br>
                <button className="btn btn-success btn-lg" onClick={() => history.push(`/comic?id=${id}`, {price})}>Buy it</button>
            </CardBody>
        </Card>
    )
}
