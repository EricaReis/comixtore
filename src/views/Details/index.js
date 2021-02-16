import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import AuthFooter from "../../components/Footers/AuthFooter.jsx";
import formatmoney from "../../common/formatmoney";

import api from "../../config/api";

import "./styles.scss";

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

  //função que adiciona o produto ao carrinho
  function addProduct() {
    var products = JSON.parse(sessionStorage.getItem("products"));
    if (!products) products = [];
    var { id, title } = comicItem;
    const product = products.find((product) => product.id === id);
    if (product) {
      product.quantity++;
      sessionStorage.setItem(
        "products",
        JSON.stringify([
          ...products.filter((product) => product.id !== id),
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

  //função que pega o comic por Id
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
      <div className="jumbotron">
        <div className="container">
          <div className="container-image">
            <div className="image">
              <img
                top
                width="100%"
                src={`${
                  comicItem.thumbnail && comicItem.thumbnail.path
                }/portrait_xlarge.${
                  comicItem.thumbnail && comicItem.thumbnail.extension
                }`}
                alt="Product image"
              />
            </div>
          </div>
          <div className="container-text">
            <h1 className="display-3">{comicItem.title}</h1>
            {!comicItem.description ? (
              <p>Comic without description</p>
            ) : (
              <p>{comicItem.description}</p>
            )}
            <span className="price">
              {formatmoney(history.location.state.price)}
            </span>
            <p>
              <button
                onClick={() => addProduct()}
                className="btn btn-success btn-lg"
              >
                Buy &raquo;
              </button>
            </p>
          </div>
        </div>
      </div>
      <AuthFooter />
    </main>
  );
}

export default Details;
