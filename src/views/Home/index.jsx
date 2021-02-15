import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

// core components
import Header from "../../components/Header";
import AuthFooter from "../../components/Footers/AuthFooter.jsx";
import Spotlight from "../../components/Spotlight";
import EmpowerSales from "./EmpowerSales";
import Navbar from "../../components/Navbar";
import "./styles.scss";
import api from "../../config/api";

//Página principal com Carousel/Slider de Promos e anúncios internos

//Imagens de Capa mockadas
const items = [
  {
    id: 1,
    src: require("../../assets/img/brand/capa2.jpg"),
  },
  {
    id: 2,
    src: require("../../assets/img/brand/capa1.jpg"),
  },
];

export default function Home() {
  var products = JSON.parse(sessionStorage.getItem("products"));
  if (!products) products = [];
  const [productQuantity, setProductQuantity] = useState(products.length);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [comics, setComics] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  useEffect(() => {
    GetData();
  }, [page]);

  const lastComicTableElementRef = createRefElement();

  function createRefElement() { //componente que cria uma ref pro infinite scroll
    const observer = useRef();
    const lastElementRef = useCallback(
      (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((page) => page + 1);
          }
        });
        if (node) observer.current.observe(node);
      },
      [loading, hasMore]
    );
    return lastElementRef;
  }

  async function GetData() { //Busca os dados dos comics da API da Marvel
    setLoading(true);
    const { data } = await api.get(
      `comics?ts=1&apikey=aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91&&offset=${page}&&limit=${limit}`
    );
    const dashcomics = await getRares(data.data.results);
    setComics((comics) => [...comics, ...dashcomics]);
    var total = data.data.total;
    var totalPages = Math.ceil(total / limit);
    if (totalPages === page) setHasMore(false);
    else setHasMore(true);
    setLoading(false);
  }

  //Controles do Carousel do Reactstrap
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  //Função que gera preços e distribui o selo de raros entre os comics
  async function getRares(results) {
    let dashcomics = results.map((comic) => {
      comic.price = Math.random() * (200 - 10) + 10; //Gera um preço randômico
      let discount = Math.random() * (0.95 - 0.8) + 0.8; //Gera um desconto randômico
      comic.oldprice = comic.price * discount;
      return comic;
    });
    var rares = [];
    const total = dashcomics.length;
    var index;
    do {
      index = parseInt(Math.random() * (total - 0) + 0);
      if (rares.indexOf(index) === -1) {
        dashcomics[index].rare = true;
        rares.push(index);
      }
    } while (rares.length < (total / 100) * 5);
    return dashcomics;
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img style={{ width: "100%" }} src={item.src} alt="banner-home" />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="main-content">
        <Header productQuantity={productQuantity} />
        <div>
          <Navbar />
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <EmpowerSales />
        <Spotlight
          lastComicTableElementRef={lastComicTableElementRef}
          comics={comics}
        />
      </div>
      <AuthFooter />
    </>
  );
}
