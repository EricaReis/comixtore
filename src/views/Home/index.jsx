import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

// core components
import Header from "../../components/Header";
import AuthFooter from "../../components/Footers/AuthFooter.jsx";
import Spotlight from "../../components/Spotlight";
import Bestseller from "../../components/Bestseller";
import ForcaDeVendas from "./ForcaDeVendas";
import Navbar from "../../components/Navbar";
import './styles.scss';
import api from '../../config/api'

//Página principal com Carousel/Slider de Promos e anúncios internos

const items = [
  {
    id: 1,
    src: require('../../assets/img/brand/capa2.jpg'),
  },
  {
    id: 2,
    src: require('../../assets/img/brand/capa1.jpg'),
  }
];


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [comics, setComics] = useState([]);
  
  useEffect(()=>{
    GetData()
  },[])
  
  async function GetData(){
    const { data }  = await api.get('comics?ts=1&apikey=aef082249bc234fb888c4e9cccfc3b66&hash=fe1f6685d77d08d039f7158e284fbd91');
    setComics(data.data.results);
    console.log(data.data.results);
  }
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img style={{ width: '100%'}} src={item.src} alt='banner-home' />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="main-content">
        <Header />
        <div>
          <Navbar/>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
        <ForcaDeVendas />
        <Spotlight comics={comics}/>
        <div>
          <Bestseller />
        </div>  
      </div>
      <AuthFooter />
    </>
  );
}
