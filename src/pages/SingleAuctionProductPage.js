import React, { useEffect,useState } from "react";
import Button from "@mui/material/Button";
import { Navbar } from "../components";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const SingleAuctionProductPage = () => {
  let ImageLink = [
    {
      Link: "https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325645/cassello%20jewelers/Cassello%20Jeweler/DD936C8A-14E8-4AD4-B248-CE4D57F49A66_yrqwu0.jpg",
    },
    {
      Link: "https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/ADC00B5E-D80E-443A-90A9-DB1ECD757928_daabpc.jpg",
    },
    {
      Link: "https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/85921E0E-0DBA-4B23-B479-92CF18BA5E2D_a3zkgq.jpg",
    },
    {
      Link: "https://res.cloudinary.com/dwyqdiqds/image/upload/v1693325644/cassello%20jewelers/Cassello%20Jeweler/5E1C32A8-E954-44C9-8102-21324AF0BD3B_rflv9n.jpg",
    },
  ];

  const [remainingTime, setRemainingTime] = useState(5025);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Wrapper>
      <Navbar />


      <div className="ButtonHolderOuter">
      <div className="ButtonHolder">
      <Link to="/AuctionPage">
          <Button variant="text">
            <p className="ButtonText">Back to Auctions</p>
          </Button>
        </Link>
        </div>
        </div>
      <Grid container gap={12} className="CenteringDiv">
        
        <Grid item lg={4} xs={12}>
          <div className="SwiperHolder">
            
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.custom-swiper-button-next', // Custom class for "Next" button
                prevEl: '.custom-swiper-button-prev', // Custom class for "Previous" button
              }}
              className="mySwiper"
            >
              {ImageLink.map((Item, index) => {
                return (
                  <SwiperSlide className="SwiperSlide">
                    <img src={Item.Link} className="SwiperImage" />
                  </SwiperSlide>
                );
              })}
                 <div className="custom-swiper-button-prev">Previous</div>
          <div className="custom-swiper-button-next">Next</div>
            </Swiper>
          </div>
        </Grid>
        <Grid item lg={4}>
          <div className="InfoHolder">
                  <p className="TitleText">Eve's Nacklace</p>
                  <Rating name="size-large" defaultValue={2} size="size-medium" />
                  <p className="DescriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <hr style={{marginBottom:15}}/>
                  <div className="BrandInfoHolder">
                    <p className="BrandTitle">Retail</p>
                    <p className="BrandName">$ 100.00</p>
                  </div>
                  <div className="BrandInfoHolder">
                    <p className="BrandTitle">Highest Bid</p>
                    <p className="BrandName">$ 212.45</p>
                  </div>
                  <div className="BrandInfoHolder">
                    <p className="BrandTitle">Last Bid</p>
                    <p className="BrandName">@usernamedemo</p>
                  </div>
                 
                

                  <div className="ActionHolder">
                          <div className="TimeHolder">
                              <p className="RemainingTimeText">Remaining Time</p>
                              <p className="TimeLeft">{formatTime(remainingTime)}</p>
                          </div>
                              <Link to="/BidPlacement">
                          <Button variant="outlined" className="BidButton">Place Your Bid</Button>
                          </Link>
                  </div>

          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #eeeeee;
  font-family: "Century Gothic", sans-serif;
  .TitleText{
    font-size:45px;
    font-weight:1000;
    letter-spacing:2px;
  }
  .RemainingTimeText{
    font-size:18px;
    font-weight:100;
    margin-top:2.5%;
    margin-bottom:0px;
  }
  .ActionHolder{
    display:flex;
    justify-content:space-between;
    width:85%;
  }

  .ButtonText {
    font-size: 18px;
    font-weight: 100;
    text-align: center;
    padding-top:10%;
    
  }
  .ButtonHolder{
    width:100%;
    width:72.5%;
  }
  .ButtonHolderOuter{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:2.5%;
  }

    .BidButton{
      height:55px;
      width:200px;
      margin-top:5%;
      outline:none;
      color:#10454F;
      background-color: #a6705d;
      &:hover {
        background-color: black;
        border:none;
        outline:none;
      }
      color:white;
    }
    


  .TimeLeft{
    font-size:35px;
  }

  .BrandName{
    font-size:20px;
    font-weight:700;
  }
  .BrandTitle{
    font-size:22.5px;
    font-weight:100;
  }
  .DescriptionText{
    font-size:20px;
    font-weight:100;
    letter-spacing:2px;
    margin-top:2.5%;
  }
  .BrandInfoHolder{
    display:flex;
    justify-content:space-between;
    width:75%;
  }
  .CenteringDiv {
    display: flex;
    justify-content: center;
    height: 100%;
    padding-bottom:10%;
    margin-top: 2%;
  }

  .InfoHolder{
    height:80vh;
  }
  .SwiperImage {
    object-fit: cover;
  }
  .SwiperHolder {
    height: 80vh;
  }
  .SwiperSlide{
    width:450px;
  }
  
  /* Style for Custom Navigation Buttons */
 
  .mySwiper .custom-swiper-button-next {
    color: black;
    
    font-size: 18px;
    font-weight:100;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px 0px 0px 5px;
    cursor: pointer;
  }
  
  /* Position the "Previous" button to the left */
  .mySwiper .custom-swiper-button-prev {
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
  .mySwiper .custom-swiper-button-next {
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

  @media (max-width: 767px) {
    margin-top:80px;
    .InfoHolder{
      height:100%;
      padding:5%;
    }
    .ActionHolder{
      width:100%;
    }
    .BrandInfoHolder{
      display:flex;
      justify-content:space-between;
      width:90%;
    }
  }
  @media (min-width: 767px) and (max-width: 1200px) {
    margin-top:80px;
    
    .InfoHolder{
      height:100%;
      padding:5%;
    }
    
  }
`;

export default SingleAuctionProductPage;