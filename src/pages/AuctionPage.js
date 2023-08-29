import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Button from "@mui/material/Button";
import { Filters, ProductList, Sort, PageHero } from "../components";

import heroBcg8 from "../assets/hero-bcg-8.jpg";
import Grid from "@mui/material/Grid";
import AuctionProductList from "../components/AuctionProductList";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const AuctionPage = () => {
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
  const UpComingAuction = [
    {
      title: "Sapphire Elegance Necklace",
      description: "Exquisite sapphire pendant with a touch of elegance.",
      cost: "$299.99",
      startingDate: "September 15, 2023",
      startingTime: "12 : 00",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      title: "Diamond Infinity Earrings",
      description: "Timeless diamond earrings symbolizing endless beauty.",
      cost: "$499.99",
      startingDate: "October 5, 2023",
      startingTime: "12 : 00",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      title: "Emerald Enchantment Ring",
      description: "Captivating emerald ring that enchants hearts.",
      cost: "$399.99",
      startingDate: "October 20, 2023",
      startingTime: "12 : 00",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      title: "Pearl Harmony Bracelet",
      description: "Harmonious pearls in a bracelet that radiates grace.",
      cost: "$249.99",
      startingDate: "November 2, 2023",
      startingTime: "12 : 00",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
  ];

  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Navbar />
      <Wrapper>
        <div className="informationHolderMobile"> 
            
            <div className="Upper">
            <div className="Information">
                <p className="InfoNumber">650,000</p>
                <p className="InfoTitle">Bids</p>
            </div>

            <div className="Information">
                <p className="InfoNumber">259,947</p>
                <p className="InfoTitle">Members</p>
            </div>
            </div>

            <div className="Lower">
            <div className="Information">
                <p className="InfoNumber">746</p>
                <p className="InfoTitle">Open Auction</p>
            </div>
            <div className="Information">
                <p className="InfoNumber">97,016</p>
                <p className="InfoTitle">Sold Product</p>
            </div>
            </div>
        </div>


          <div className="informationHolderDesktop">

          <div className="Information">
                <p className="InfoNumber">650,000</p>
                <p className="InfoTitle">Bids</p>
            </div>

          <div className="Information">
                <p className="InfoNumber">259,947</p>
                <p className="InfoTitle">Members</p>
            </div>
            
          <div className="Information">
                <p className="InfoNumber">746</p>
                <p className="InfoTitle">Open Auction</p>
            </div>

          <div className="Information">
                <p className="InfoNumber">97,016</p>
                <p className="InfoTitle">Sold Product</p>
            </div>
          </div>


        <AuctionTitle>Exclusively Available on Auction</AuctionTitle>
        <Card>
          <CardContent>
            <CardImage src={heroBcg8} alt="Auction Product" />
            <AuctionDetails>
              <Price>Premium Diamond Ring</Price>
              <CountdownTimer>
                <TimerLabel>Time Remaining:</TimerLabel>
                <TimerValue>{formatTime(remainingTime)}</TimerValue>
              </CountdownTimer>
              <Price>$500</Price>

              <BidButton>
                <Button className="b1" variant="contained" color="primary">
                  Checkout Item
                </Button>
                <Button className="b1" variant="contained" color="primary">
                  LOGIN TO BID
                </Button>
              </BidButton>
            </AuctionDetails>
          </CardContent>
        </Card>

        <p className="OnAuctionTitle">Products On Auction</p>
        <div style={{ padding: "2rem" }}>
          <AuctionProductList />
        </div>
        <p className="UpComingText">Up Coming Bids</p>
        <div>
          <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              767: {
                slidesPerView: 3, // 1 slide per view on screens up to 767px
              },
              1200: {
                slidesPerView: 3, // 2 slides per view on screens up to 1024px
              },
              2000: {
                slidesPerView: 3, // 2 slides per view on screens up to 1024px
              },
            }}
          >
            {UpComingAuction.map((item, index) => (
              <SwiperSlide key={index} className="MySlide">
                

                <img src={item.image} className="SlideImage" />
                <div className="InfoHolder">
                  <p className="SlideTitle">{item.title}</p>
                  <p className="SlideSubTitle">{item.description}</p>
                </div>
                <div className="CenteringDiv">
                  <hr className="Divider" />
                </div>

                <p className="StartingTitle">Starting On</p>
                <div className="StartingHolder">
                  <div className="TimeHolder">
                    <CalendarTodayIcon className="Icon" />

                    <p className="DateTimeText">{item.startingDate}</p>
                  </div>
                  <div className="TimeHolder">
                    <AccessTimeIcon className="Icon" />
                    <p className="DateTimeText">{item.startingTime}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding-bottom: 5%;
  background-color: #eeeeee;
  font-family: "Century Gothic", sans-serif;

 .informationHolderMobile{
  display:none;
 }
 .Upper{
  display:flex;
  justify-content:space-evenly;
  width:50%;
 }
 .Lower{
  display:flex;
  justify-content:space-evenly;
  width:50%;
 }
 .informationHolderDesktop{
  display:flex;
  justify-content:space-evenly;
  padding:2%;
  background-color:black;
 }

.InfoNumber{
  font-size:30px;
  text-align:center;
  color:white;
  font-weight:1000;
  letter-spacing:5px;
  color:white;
}
.InfoTitle{
  font-size:20px;
  text-align:center;
  font-weight:100;
  letter-spacing:5px;
  color:#A6705D;
}

  .OnAuctionTitle {
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-top: 100px;
  }
  .StartingHolder {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 5%;
  }
  .DateHolder {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .TimeHolder {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .DateHolder {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .DateTimeText {
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255, 0.95);
  }
  .Icon {
    font-size: 25px;
    margin-right: 5px;
    color: rgb(255, 255, 255, 0.95);
  }
  .UpComingText {
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-top: 50px;
  }
  .mySwiper {
    width: 80%;
  }
  .MySlide {
    height: 350px;
    background-color: black;
    border-radius: 10px;
    height: 100%;
  }
  .StartingTitle {
    font-size: 20px;
    color: white;
    font-weight: 100;
    text-align: left;
    padding-left: 5%;
  }

  .Divider {
    width: 75%;
    opacity: 0.4;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .CenteringDiv {
    display: flex;
    justify-content: center;
  }
  .SlideTitle {
    font-size: 25px;
    font-weight: bold;
    color: white;
    text-align: left;
    letter-spacing: 5px;
    width: 75%;
    margin-bottom: 5px;
  }
  .SlideSubTitle {
    font-size: 20px;
    width: 85%;
    letter-spacing: 2px;
    font-weight: 100;
    color: white;
    text-align: left;
  }
  .swiper-pagination-bullet {
    background-color: white; /* Change this to your desired inactive color */
    height: 10px;
    width: 10px;
  }

  /* Active dot */
  .swiper-pagination-bullet-active {
    background-color: white; /* Change this to your desired active color */
  }
  .InfoHolder {
    padding-left: 5%;
    padding-top: 2.5%;
  }
  .SlideImage {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    .MySlide{
        height:600px;
    }
   
    .informationHolderMobile{
      margin-top:80px;
    }
    .InfoNumber{
      font-size:22.5px;
      text-align:center;
      color:white;
      font-weight:1000;
      letter-spacing:5px;
      color:white;
    }
    .InfoTitle{
      font-size:14px;
      text-align:center;
      font-weight:700;
      letter-spacing:5px;
      color:#A6705D;
    }
    .informationHolderMobile{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:2%;
      height:100%;
      background-color:black;
     }
     .informationHolderDesktop{
        display:none;
     }
     
     .Upper{
      width:100%;
     }
     .Lower{
      width:100%;
     }
  }
  
`;

const AuctionTitle = styled.h2`
  background: #eeeeee;
  font-family: "Century Gothic", sans-serif;
  text-align: center;
  font-size: 28px;
  margin-top: 40px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Card = styled.div`
  font-family: "Century Gothic", sans-serif;
  width: 80%;
  margin: 0 auto;
  background-color: #272626;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-top: 100px;
  }
`;

const CardContent = styled.div`
  font-family: "Century Gothic", sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    display: grid;
  }
`;

const CardImage = styled.img`
  width: 40%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const AuctionDetails = styled.div`
  font-family: "Century Gothic", sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;

const CountdownTimer = styled.div`
  font-family: "Century Gothic", sans-serif;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TimerLabel = styled.p`
  font-family: "Century Gothic", sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  color: white;
`;

const TimerValue = styled.p`
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Price = styled.p`
  font-family: "Century Gothic", sans-serif;
  font-size: 24px;
  font-weight: 200px;
  margin-bottom: 10px;
  color: #a6705d;
`;

const BidButton = styled.div`
  font-family: "Century Gothic", sans-serif;
  width: 100%;
  .b1 {
    width: 40%;
    margin-left: 5%;
    background-color: #a6705d;
    &:hover {
      background-color: black;
    }
  }

  @media (max-width: 767px) {
    .b1 {
      width: 95%;
      margin-left: 0%;
      margin-top: 5%;
      background-color: #a6705d;
      &:hover {
        background-color: black;
      }
    }
  }
`;

export default AuctionPage;
