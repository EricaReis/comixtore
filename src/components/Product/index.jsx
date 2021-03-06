import React from "react";
import { useHistory } from "react-router-dom";

import { CardImg, CardBody, CardTitle } from "reactstrap";
import formatmoney from "../../common/formatmoney";
import Flag from "../Flag";

import "./styles.scss";

//Card de produtos
export default function Product({
  comic,
  lastComicTableElementRef,
  index,
  length,
}) {
  const { title, thumbnail, id, rare, price, oldprice } = comic;
  const history = useHistory();

  return (
    <div
      ref={length === index + 1 ? lastComicTableElementRef : null}
      className="product-container card"
    >
      {rare && <Flag />}
      <CardImg
        top
        width="100%"
        src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
        alt="Product image"
      />
      <CardBody className="product-body">
        <CardTitle className="text-center">{title}</CardTitle>
        <span className="old-price">{formatmoney(oldprice)}</span>
        <strong className="price">{formatmoney(price)}</strong>
        <br></br>
        <button
          className="btn btn-success btn-lg"
          onClick={() => history.push(`/comic?id=${id}`, { price })}
        >
          Buy it
        </button>
      </CardBody>
    </div>
  );
}
