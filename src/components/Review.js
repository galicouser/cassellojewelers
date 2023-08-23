import Grid from "@mui/material/Grid";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Reviews() {
  const ReviewList = [
    {
      Image:
        "https://images.pexels.com/photos/3628700/pexels-photo-3628700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Evelyn M.",
      Star:"3.5",
      Review:
        "Absolutely mesmerized by the exquisite craftsmanship and unique designs at this jewelry store. Every piece seems to tell a story, and I couldn't resist treating myself to a stunning necklace. I'm already planning my next visit!",
    },
    {
      Image:
        "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "James R.",
      Star:"4.5",
      Review:
        "This store is a hidden gem! Pun intended. The staff is incredibly knowledgeable and patient. I needed assistance selecting the perfect engagement ring, and they helped me find a piece that captured the essence of our love. My fiancée was beyond thrilled!",
    },
    {
      Image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Sophia A.",
      Star:"5",
      Review:
        "A jewelry wonderland that brings dreams to life! I fell in love with their vintage collection. The attention to detail and the quality of the gems are unmatched. I feel like a queen whenever I wear the ring I purchased from here.",
    },
    {
      Image:
        "https://images.pexels.com/photos/12118422/pexels-photo-12118422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Oliver H.",
      Star:"4.5",
      Review:
        "Impressed by the modern and sleek designs at this store. Their minimalist approach to jewelry is captivating. The rose gold bracelet I bought is delicate yet eye-catching, making it my new everyday accessory.",
    },
    {
      Image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Name: "Isabella C.",
      Star:"2.5",
      Review:
        "What a delightful experience! The store's ambiance is so elegant and inviting. I bought a pair of diamond studs, and they added a touch of sophistication to my collection. The staff's warm service made the visit even more special.",
    },
    {
      Image:
        "https://images.pexels.com/photos/3628700/pexels-photo-3628700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      Name: "William P.",
      Star:"3",
      Review:
        "Talk about exceptional customer service! They went above and beyond to create a custom necklace for my anniversary. The final piece exceeded my expectations, and my wife was truly moved by the thoughtful gift.",
    },
    {
      Image:
        "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      Name: "Ava S.",
      Star:"4",
      Review:
        "Quality and affordability hand in hand. I was amazed by the range of options available without compromising on craftsmanship. My daughter's birthstone pendant was not only beautiful but also reasonably priced.",
    },
    {
      Image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      Name: "Liam G.",
      Star:"4.5",
      Review:
        "An ode to elegance! This store celebrates timeless beauty with its classical designs. I purchased a pearl necklace that adds a touch of grace to any outfit. It's a symbol of enduring style.",
    },
    {
      Image:
        "https://images.pexels.com/photos/12118422/pexels-photo-12118422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      Name: "Harper L.",
      Star:"5",
      Review:
        "A treasure trove for unique jewelry enthusiasts. I adore their fusion of traditional and contemporary designs. The opal ring I bought is a conversation starter, and I'm already planning to explore their other collections.",
    },
    {
      Image:
        "https://images.pexels.com/photos/3628700/pexels-photo-3628700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      Name: "Emma K.",
      Star:"4",
      Review:
        "Absolutely enchanted by the ethereal pieces at this store. The sapphire bracelet I acquired has an almost magical allure. It's more than jewelry; it's wearable art that brings joy with every glance.",
    },
  ];

  return (
    <Wrapper>
        <p className="TitleLine">What Our Client's Say</p>

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
         
        {ReviewList.map((review, index) => (
          <SwiperSlide key={index} className="SlideHolder">
            {/* <h3>{review.Name}</h3>
            <p>{review.Review}</p> */}
            <Grid container gap={2} className="CenteringDiv">
              <Grid item lg={3}>
                <div className="ImageHolder">
                  <img
                    className="ReviewImage"
                    src={review.Image}
                  />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div>
                  <Grid container gap={2} className="CenteringDiv">
                    <Grid item lg={12}>
                      <div>
                        <p className="ReviewText">{review.Review}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12}>
                      <div className="RatingHolder">
                      <Rating className="Rating" name="half-rating-read" defaultValue={review.Star} precision={0.5} readOnly />
                       </div>
                    </Grid>
                    <Grid item lg={12}>
                      <div>
                        <p className="ReviewName">{review.Name}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </SwiperSlide>
          
        ))}
       
        <div className="LightEffect" />
       
      </Swiper>
    </Wrapper>
  );
}
const Wrapper = styled.section`

font-family: "Century Gothic", sans-serif;
  position: relative;
  background:none;
  .mySwiper {
    width: 100%;
    height: 60vh;
  }
  .CenteringDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .RatingHolder{
    width:100%;
    display:flex;
  }
  .ImageHolder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ReviewImage {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 200px;
    shadow: 10px;
  }
  .TitleLine{
    font-size:50px;
    padding-top:1%;
    text-align:center;
    font-weight:100;
  }
  .ReviewName{

    text-align:left;
    padding-left:0.5%;
  }
  .ReviewText {
    font-size: 30px;
    font-weight: 10;
    text-align:left;
  }

  .SlideHolder {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: none;
  }

  .LightEffect {
    background-color: pink;
    opacity: 1;
    filter: blur(150px);
    height: 250px;
    width: 250px;
    position: absolute;
    right:10px;
    bottom:0px;
  }
  @media (max-width: 767px) {
    .TitleLine{
        font-size:35px;
       
      }
      .ReviewText {
        font-size: 25px; 
        text-align:center;
      }
      .mySwiper {
        height: 80vh;
      }
      .ReviewImage {
        margin-top:100%;
        width: 150px;
        height: 150px;
        border-radius: 75px;
      } 
      .ReviewName{

        text-align:center;
        
      }
  }
  @media (min-width: 800px) and (max-width: 950px){
    
    .mySwiper {
        height: 90vh;
      }
      .TitleLine{
        
      }
      .ReviewText {
        text-align:center;
      }
      .ReviewName{

        text-align:center;
        
      }
  }
`;
export default Reviews;
