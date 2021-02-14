import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardDeck,
  CardColumns,
} from "reactstrap";
import AuthFooter from "../../components/Footers/AuthFooter.jsx";

import api from "../../config/api";

// import { Container } from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Details() {
  const history = useHistory();
  const query = useQuery();
  var products = JSON.parse(sessionStorage.getItem("products"));
  if (!products) products = [];
  const [productQuantity, setProductQuantity] = useState(products.length);
  const [comicItem, setComicItem] = useState({});
  const [price, setPrice] = useState({});
  const [comicId, setComicId] = useState(
    query.get("id") ? query.get("id") : ""
  );

  useEffect(() => {
    getComic();
    if (history.location.state.price) {
      setPrice(history.location.state.price);
    }
  }, []);

  function addProduct() {
    var products = JSON.parse(sessionStorage.getItem("products"));
    if (!products) products = [];
    var { id, title } = comicItem;
    const product = products.find((product) => product.id == id);
    if (product) {
      product.quantity++;
      sessionStorage.setItem(
        "products",
        JSON.stringify([
          ...products.filter((product) => product.id != id),
          { id, title, quantity: product.quantity, price },
        ])
      );
    } else {
      setProductQuantity((productQuantity) => productQuantity + 1);
      sessionStorage.setItem(
        "products",
        JSON.stringify([...products, { id, title, quantity: 1, price }])
      );
    }
  }

  async function getComic() {
    const { data } = await api.get(
      `comics/${comicId}?ts=1&apikey=aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91`
    );
    setComicItem(data.data.results[0]);
  }

  return (
    <main role="main">
      <Header productQuantity={productQuantity} />
      <Navbar />
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">{comicItem.title}</h1>
          {!comicItem.description ? (
            <p>Produto sem Descrição</p>
          ) : (
            <p>{comicItem.description}</p>
          )}
          <p>
            <button
              onClick={() => addProduct()}
              className="btn btn-success btn-lg"
            >
              Buy &raquo;
            </button>
          </p>
          <span></span>
          <Card className="product-container">
            <CardImg
              top
              width="100%"
              src={`${
                comicItem.thumbnail && comicItem.thumbnail.path
              }/portrait_xlarge.${
                comicItem.thumbnail && comicItem.thumbnail.extension
              }`}
              alt="Imagem produto"
            />
          </Card>
        </div>
      </div>
      <AuthFooter />
    </main>
  );
}

export default Details;
