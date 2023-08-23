import React, { useState, useEffect, useRef } from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import citrine from "../assets/citrine-earring.mov";
import teardrop from "../assets/tear-drop.mov";
import xearring from "../assets/x-earrings.mov";
import styled from "styled-components";
import { Navbar } from "../components";
import ServicesReverse from "../components/ServicesReverse";
import "../Scrollbar.css";
import Reviews from "../components/Review";
import CaselloImg from "../assets/Cassello.jpeg";
import { AnimatePresence } from "framer-motion";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { motion } from "framer-motion";
import { getProducts } from "../utils/API";

const StyledButton = styled.div`
  color: black;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
  transition: color 0.3s ease, border-color 0.3s ease; /* Add color and border-color to the transition property */
  font-family: "Gill Sans", sans-serif;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Adjust the thickness of the underline */
    background-color: #d8b08c; /* Color of the underline */
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #d8b08c;
    &::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  @media (max-width: 992px) {
    color: #d8b08c;
  }
`;

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

// async function fetchProductsData() {
//   try {
//     const response = await getProducts();
//     const products = response.data;
//     console.log(products)
//     return products;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

const HomePage = () => {
  const videos = [citrine, teardrop, xearring];
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef();
  const [loader, setLoader] = useRecoilState(textState);

  // fetchProductsData();

  const [showSplash, setShowSplash] = useState(true);
  const splashDuration = 3000;

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.keyCode === 13) {
        setLoading(false);
      }
    };

    window.addEventListener("keydown", handleEnter);

    return () => window.removeEventListener("keydown", handleEnter);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
    }, 5000); // change videos every 8 seconds

    return () => clearInterval(intervalId); // clean up on component unmount
  }, [currentVideo, videos]);

  // Add this useEffect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videos, currentVideo]);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setLoader(true);
    }, splashDuration);

    return () => clearTimeout(splashTimer);
  }, []);

  const handleButtonClick = () => {
    setLoading(false);
    setLoader(true);
  };

  if (showSplash && loader == false) {
    return (
      <SplashScreen>
        <AnimatePresence>
          {showSplash && loader == false && (
            <motion.div
              className="splashscreeninner"
              initial={{ x: -500, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="splashInner">
                <h1>Cassello </h1>
                <h1 style={{ color: "#A67563" }}>Jewellers</h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SplashScreen>
    );
  } else if (loader == false) {
    return (
      <Wrapper>
        <div className="loading-screen">
          <VideoContainer>
            {videos.map((video, index) => (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                src={videos[currentVideo]}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            ))}
          </VideoContainer>
          <div className="button-holder">
            <StyledButton onClick={handleButtonClick}>
              Start Exploring
            </StyledButton>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <main style={{ backgroundColor: "#eeeeee" }}>
        <Navbar />
        <Hero />
        <Services />
        <FeaturedProducts />
       <ServicesReverse />
        <Reviews/> 
          
      </main>
    );
  }
};

export default HomePage;

const Wrapper = styled.div`
  font-family: cursive;
  width: 100%;
  height: 100vh;

  .loading-text {
    width: 100%;
    height: 200px;
    padding: 2rem;
    color: black;
    font-size: 30px;
    font-family: "Century Gothic", sans-serif;
  }
  .button-holder {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 50%;
  height: 60vh;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--clr-primary-5);
  border-radius: 8px;

  @media (max-width: 992px) {
    width: 80%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
`;

const SplashScreen = styled.div`
  width: 100%;
  height: 1000px;
  position: absolute;
  z-index: 10000;
  background-color: white;
  font-family: "Century Gothic", sans-serif;

  .splashscreeninner {
    display: grid;
    justify-content: center;
    place-content: center;
    font-family: "Century Gothic", sans-serif;
    width: 100%;
    height: 100vh;
    padding: 2rem;
    position: fixed;
  }

  .splashInner {
    display: flex;
    width: 90%;
  }

  @media (max-width: 600px) {
    .splashInner {
      display: flex;
      font-size: 10px;
    }
  }
`;
