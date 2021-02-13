import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Card, CardImg, CardBody, CardTitle, CardDeck, CardColumns } from 'reactstrap'
import AuthFooter from "../../components/Footers/AuthFooter.jsx";
import { AppContext } from "../../App";

import api from '../../config/api'

// import { Container } from './styles';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Details() {
    const query = useQuery();
    const [comicId, setComicId] = useState(query.get("id") ? query.get("id") : "");
    const [comicItem, setComicItem] = useState({});

    const {
      setProducts, 
      products
    } = useContext(AppContext);
    
    async function getComic(){
        console.log(comicId);
        const { data }  = await api.get(`comics/${comicId}?ts=1&apikey=aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91`);
        setComicItem(data.data.results[0]);
        console.log(data.data.results[0]);
    }

    function addProduct(){
      setProducts(products => [...products, comicItem])
    }

    useEffect(()=>{
        console.log(products)
        getComic()
    },[])

  return (
    <main role="main">
        <Header/>
        <Navbar/>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">{comicItem.title}</h1>
          <p>
            {comicItem.description}
          </p>
          <p>
            <a onClick={()=> addProduct()} className="btn btn-success btn-lg" href="#" role="button">
              Buy &raquo;
            </a>
          </p>
          <Card className='product-container'>
            <CardImg top width="100%" src={`${comicItem.thumbnail && comicItem.thumbnail.path}/portrait_xlarge.${comicItem.thumbnail && comicItem.thumbnail.extension}`} alt="Imagem produto" />
        </Card>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
      <AuthFooter/>
    </main>
  );
}

export default Details;
