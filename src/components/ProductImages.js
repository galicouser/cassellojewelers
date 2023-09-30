import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import axios from 'axios'; // Import axios or your preferred HTTP client

const ProductImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <div className="container">
        {images ? (
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              nextEl: '.custom-swiper-button-next', // Custom class for "Next" button
              prevEl: '.custom-swiper-button-prev', // Custom class for "Previous" button
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index} className='SwiperSlide'>
                <img src={imageUrl} alt={`Product Image ${index}`} />
              </SwiperSlide>
            ))}
            <div className="custom-swiper-button-prev">Previous</div>
            <div className="custom-swiper-button-next">Next</div>
          </Swiper>
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

width:500px;
  .main {
    height: 5px;
  }
  .mySwiper{
    margin-top:1%;
  }
 
  /* Style for Custom Navigation Buttons */
 
  .mySwiper2 .custom-swiper-button-next {
    color: black;
    
    font-size: 18px;
    font-weight:100;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px 0px 0px 5px;
    cursor: pointer;
  }
  
  /* Position the "Previous" button to the left */
  .mySwiper2 .custom-swiper-button-prev {
    position: absolute;
    left: 0;
    top: 95%;
    width:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:10;
    transform: translateY(-50%);
     color: black;
    font-size: 18px;
    font-weight:100;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 15px 5px 0px;
    cursor: pointer;
  }
  
  /* Position the "Next" button to the right */
  .mySwiper2 .custom-swiper-button-next {
    position: absolute;
    right: 0;
    top: 95%;
    z-index:10;
    transform: translateY(-50%);
    
    width:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .SwiperSlide{
    width:500px;
    height:500px;
  }
 
  
  
  
  
  
  
  @media (max-width: 576px) {
    width:250px;
    height:100px;
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (max-width: 767px) {
    width:100%;
    height:200px;
    margin-bottom:10%;

    .container{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      align-content:center;
    }

  }
 


  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
  @media (min-width: 767px) and (max-width: 800px) {
    width:700px;
    .SwiperSlide{
    }
  }
`

export default ProductImages