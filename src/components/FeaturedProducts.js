import React, { useState, useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const FeaturedProducts = () => {
  const { products } = useProductsContext();
  const [randomProducts, setRandomProducts] = useState([]);

  const slidesToShow = window.innerWidth <= 1200
    ? (window.innerWidth <= 600 ? 2 : 3)
    : 5;

  useEffect(() => {
    // Shuffle the products array to get a random order
    const shuffledProducts = shuffleArray(products);

    // Take the first 5 products from the shuffled array
    const randomFiveProducts = shuffledProducts.slice(0, 5);

    setRandomProducts(randomFiveProducts);
  }, [products]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <Wrapper className="section">
      <div className="title">
        <h2 className="TitleText">Our best sellers</h2>
      </div>
      <Swiper
        slidesPerView={slidesToShow}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {randomProducts.map((product, index) => (
          <SwiperSlide key={index} className="CustomSlide">
            <Product key={product.id} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/products">
        <div className="centeringDiv">
          <Button variant="outlined" className="MoreTitle">
            Show All
          </Button>
        </div>
      </Link>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  background: "#eeeeee";
  font-family: "Century Gothic", sans-serif;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .mySwiper{
    width:100%;
    height: 550px;
  }
  .swiper-pagination-bullet {
    background-color: #eeeeee; 
  }
  
  .swiper-pagination-bullet-active {
    background-color:#eeeeee; 
  
  }


  .centeringDiv {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .MoreTitle {
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 150px;
    margin-top:5%;
    color: #222831;
    border: 4px solid rgb(0,0,0,0.20);
  }

  .MoreTitle:hover {
    background-color: black;
    border: none;
    color: white;
  }

  .TitleText {
    color: grey;
    font-size:50px;
    margin-bottom:2.5%;
  }
  .btn {
    display: block;
    width: 250px;
    margin: 0 auto;
    text-align: center;
    background-color: #f2ba52;
    color: black;
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
   
  }

  @media (max-width: 767px) {
    .mySwiper{
      width:100%;
    }
  }
`;

export default FeaturedProducts;
