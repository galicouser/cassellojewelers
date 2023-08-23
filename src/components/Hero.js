import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { motion } from 'framer-motion';

import heroBcg3 from "../assets/hero-bcg-3.jpg";
import heroBcgt from "../assets/hero-bcg-2.jpg";
import heroBcg4 from "../assets/hero-bcg-4.jpg";
import heroBcg5 from "../assets/hero-bcg-5.jpg";
import heroBcg8 from "../assets/hero-bcg-8.jpg";

import image_2 from "../assets/image-3.jpg";
import image_3 from "../assets/image-4.jpeg";
import image_4 from "../assets/image-5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { AllInbox } from "@mui/icons-material";

const Hero = () => {
  const carouselTexts = [
    {
      title: "Tailoring Elegance, Just for You",
      content:
        "Welcome to Cassello Jewelers, your premier online destination for exclusive, handcrafted jewelry designs. We specialize in offering an extensive collection of high-quality, luxury pieces ranging from timeless classics to contemporary trends. Our curated selection of ethically-sourced diamonds, precious gemstones, and finely wrought gold and silver pieces ensures that there's something for everyone. ",
      image: image_2,
    },
    {
      title: "Shaping Your Unique Sparkle",
      content:
        "Discover the magic of exquisite jewelry with Cassello Jewelers, your top-tier online store for unique and handcrafted jewelry masterpieces. We take pride in our wide array of top-notch luxury items that blend tradition and modernity. Our carefully chosen collection includes ethically mined diamonds, precious gems, and intricate gold and silver pieces.",
      image: heroBcg4,
    },
    {
      title: "Where Precious Becomes Personal",
      content:
        "Whether you're searching for a stunning engagement ring, an elegant necklace, or personalized jewelry gifts, our expert team is dedicated to helping you discover the perfect piece. With a secure shopping experience, worldwide shipping, and top-notch customer service, Cassello Jewelers is your trusted jewelry partner for every occasion.",
      image: heroBcg5,
    },
    {
      title: "Designing Your Personal Elegance",
      content:
        "From the perfect engagement ring to a memorable custom gift, our dedicated team will assist you in finding the right piece for your special moment. Experience the ease of secure shopping, international shipping, and outstanding customer service with Cassello Jewelers - your reliable partner for all jewelry needs.",
      image: image_3,
    },
    {
      title: "Molding Your Precious Moments",
      content:
        "Seeking the ultimate engagement ring or a distinctive custom gift? Our committed team at Cassello Jewelers is here to help you pinpoint the perfect selection for your unique occasion. Benefit from our user-friendly online shopping platform, international delivery options, and superior customer care. Cassello Jewelers - your dependable source for all your jewelry desires.",
      image: heroBcg8,
    },
    {
      title: "Sculpting Your Jewelry Dreams",
      content:
        "From the dreamiest engagement rings to personalized keepsake gifts, our devoted team at Cassello Jewelers stands ready to guide you towards your ideal piece. Enjoy seamless shopping, worldwide shipping, and unrivaled customer service as you embark on your jewelry journey. Choose Cassello Jewelers – your trusted ally in crafting unforgettable jewelry experiences.",
      image: image_4,
    },
  ];
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    // Check if all loading states are false
    if (!loading && !loading2 && !loading3 && !loading4) {
      setAllLoaded(true);
    } else {
      setAllLoaded(false);
    }
  }, [loading, loading2, loading3, loading4]);
  function handleLoad() {
    setLoading(false);
  }
  function handleLoad2() {
    setLoading(false);
  }
  function handleLoad3() {
    setLoading(false);
  }
  function handleLoad4() {
    setLoading(false);
  }

  return (
    <Wrapper>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Grid, Pagination]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {carouselTexts.map((text, index) => (
            <SwiperSlide key={index} className="CustomSlide">
              <img className="swiper-images" src={text.image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="overlay-text">Welcome to Cassello Jewellers</p>
        <Button variant="outlined" className="MoreTitle2">
          Shop Now
        </Button>

        <Link to="AuctionPage">
          <Button variant="outlined" className="MoreTitle">
            Auction Products
          </Button>

        </Link>
      </div>

      <div className="desktop-version">
        <p className="desktopTitle">Welcome to Cassello Jewellers</p>

        <div className="ButtonHolder">
          <Link to="products">
            <Button variant="outlined" className="MoreTitle">
              Shop Now
            </Button>

          </Link>
          <Link to="AuctionPage">
            <Button variant="outlined" className="MoreTitle">
              Auction Products
            </Button>

          </Link>
        </div>
        {allLoaded &&
          <div className="ProgressHolder">
            <CircularProgress
              style={{ height: 200, width: 200, color: "grey" }}
            />
          </div>
        }

        <motion.img
          className="Image1"
          src={heroBcg3}
          onLoad={handleLoad}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img className="Image2"
          src={heroBcgt} onLoad={handleLoad2}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img className="Image3"
          style={{ opacity: allLoaded ? 0 : 1 }}
          src={heroBcg5} onLoad={handleLoad3}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }} />
        <motion.img className="Image4"
          style={{ opacity: allLoaded ? 0 : 1 }}
          src={heroBcg4} onLoad={handleLoad4}
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }} />


      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  font-family: "Century Gothic", sans-serif;


   .ButtonHolder{
    display:flex;
    justify-content:space-between;
    width:22%;
   }

  .desktop-version {
    height: 90vh;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    position: relative;
    background-color: reg(255, 255, 255, 0.1);
  }
  .ProgressHolder {
    font-size: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .Image1 {
    background: none;
    height: 550px;
    width: 350px;
    position: absolute;
    left: 3%;
    top: 10%;
    object-fit: cover;

    opacity: 0;
    transition: opacity 2s ease-in-out;
  }

  .Image2 {
    background: none;
    height: 250px;
    width: 300px;
    position: absolute;
    right: 25%;
    top: 0%;
    // border-radius:0px 0px 7px 7px;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  .Image3 {
    background: none;
    height: 400px;
    width: 350px;
    position: absolute;
    right: 5%;
    bottom: 0%;
    // border-radius:0px 0px 7px 7px;
    object-fit: cover;
    z-index: 5;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  .Image4 {
    background: none;
    height: 400px;
    width: 300px;
    position: absolute;
    right: 0%;
    bottom: 5%;
    // border-radius:0px 0px 7px 7px;
    object-fit: cover;
    z-index: 5;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  .MoreTitle {
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 180px;
    color: #222831;
    border: 4px solid rgb(0, 0, 0, 0.2);
  }

  .MoreTitle:hover {
    background-color: black;
    border: none;
    color: white;
  }
  .MoreTitle2 {
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 180px;
    color: white;
    border: 4px solid rgb(0, 0, 0, 1);
    position: absolute;
    top: 50%;
    right: 25%;
    z-index: 10;
  }

  .MoreTitle2:hover {
    background-color: black;
    border: none;
    color: white;
  }

  .desktopTitle {
    font-size: 60px;
    font-weight: 1000;
    margin-top: 15%;
    width: 50%;
    text-align: center;
    color: black;

    z-index: 10;
  }
  .desktopSubTitle {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    width: 50%;
    color: black;
  }

  .mySwiper {
    width: 100%;
    height: 60vh;
  }

  .CustomSlide {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    background-color: #eeeeee;
    font-size: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: #eeeeee;
    font-size: 50px;
  }

  .swiper-container {
    position: relative;
  }

  .swiper-container {
    display: none;
  }

  .overlay-text {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #222831;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 10px;
    border-radius: 5px;
    z-index: 10;
    font-weight: 1000;
  }
  .overlay-text2 {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 75%;
    height: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 100;
    color: #222831;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 10px;
    border-radius: 5px;
    z-index: 10;
    text-align: center;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .desktop-version {
      display: none;
    }
    .swiper-container {
      display: unset;
    }

    margin-top: 80px;

    .overlay-text2 {
      font-size: 19px;
      width: 90%;
      top: 60%;
      height: 65%;
      font-weight: 700;
    }
    .overlay-text {
      font-weight: 1000;
      font-size: 150%;
      width: 95%;
      top: 15%;
      text-align: center;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    .swiper-container {
      display: unset;
    }
    .desktop-version {
      display: none;
    }
    margin-top: 10%;
    .overlay-text2 {
      font-size: 150%;
      width: 85%;
      height: 40%;
      top: 60%;
      font-weight: 700;
    }
    .overlay-text {
      font-size: 150%;
      width: 85%;
      top: 15%;
      text-align: center;
    }
    .MoreTitle2 {
      right: 40%;
    }
  }
`;

export default Hero;
