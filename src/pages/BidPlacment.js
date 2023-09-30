import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import { Navbar } from "../components";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';

import Button from '@mui/material/Button';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BidPlacement =()=>{
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
    return (
        <Wrapper>
        <Navbar/>
        <p className="MainTitleLine">Place a Bid !</p>
        <Grid container gap={2} className="MainGrid">
        {/* <Grid item lg={10.1} xs={12}>
          <div className="ImageHolder">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {ImageLink.map((Item, index) => {
                return (
                  <SwiperSlide>
                    <img src={Item.Link} className="SwiperImage" />
                  </SwiperSlide>
                );
              })}
      </Swiper>
          </div>
        </Grid> */}
        <Grid item lg={4}>
          <div className="DescriptionHolder">
            <p className="TitleText">Eve's Nacklace</p>
            <Rating name="size-large" defaultValue={2} size="size-medium" />     
            <p className="DescriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
          </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div className="PaymentHolder">
            <p className="PaymentTitle">Enter your Payment details</p>
            <p className="NoteText">Please be advised that bids lower than the current highest bid will not be considered.</p>
            <div className="Paymentdetails">
            <input placeholder="$ Bid Amount " type="text" className="inputField"/>
                       
                        <input placeholder="Card Number" type="text" className="inputField"/>
                        <input placeholder="Street Address" type="text" className="inputField"/>
                        <input placeholder="Apt, unit, suite, etc. (optional)" type="text" className="inputField"/>
                        <input placeholder="Country" className="inputField"/>
                        <div className="horizontalInput">
                        <input placeholder="City" className="SmallInputField"/>
                        <input placeholder="State" className="SmallInputField2"/>
                        <input placeholder="Zip code" className="SmallInputField2"/>
                      
                        </div>
            </div>
          
          <div className="ButtonHolder">
            <Button variant="outlined" className="ProceedButton">Proceed</Button>
            </div>
          
          </div>
        </Grid>
       
      </Grid>
        </Wrapper>
    )
}
const Wrapper = styled.main`
background: #eeeeee;
font-family: "Century Gothic", sans-serif;
height:100%;
padding-bottom:10%;
position:relative;


.ProceedButton{

    height:50px;
    width:200px;
    

    background-color: #a6705d;
    &:hover {
      background-color: black;
      border:none;
      outline:none;
    }
    color:white;
}

.ButtonHolder{
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:3%;
}

.PaymentTitle{
    font-size:50px;
    font-weight:1000;
    text-align:center;
}
.NoteText{
    text-align:center;
    margin-bottom:10px;
}
.SmallInputField{
    height:55px;
    width:40%;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.SmallInputField2{
    height:55px;
    width:28%;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.inputField{
    height:55px;
    width:350px;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.horizontalInput{
    height:55px;
    width:350px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:1%;
}
.Paymentdetails{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.MainTitleLine{

    padding-left:8%;
    font-weight:1000;
    font-size: 50px;
    color: #222831;
}
.MainGrid{
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:2.5%;
}
.ImageHolder{
    height:40vh;
}
.DescriptionHolder{
    background-color:white;
    height:100%;
    padding:12%;
}
.BrandInfoHolder{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-bottom:7.5%;
}
.BrandTitle{
    font-size:18px;
    font-weight:100;
}
.BrandName{
    font-size:25px;
    font-weight:1000;
}
.TitleText{
    font-size:40px;
    font-weight:1000;
    margin-bottom:3px;
}
.DescriptionText{
    letter-spacing:1.5px;
    margin-bottom:10%;
}
.PaymentHolder{
    background-color:white;
    height:100%;
    padding:2%;
}
@media (max-width: 767px) {

    margin-top:85px;
    .SwiperImage{
        width:100%;
    }
    .DescriptionHolder{
        background-color:white;
        height:100%;
        padding:12%;
    }
    .PaymentHolder{
        height:100%;
        padding:5%;
        padding-bottom:15%;
    }
    .MainTitleLine{
        font-size:50px;
    }

}

@media (min-width: 800px) and (max-width: 950px) {
  margin-top:80px;

  .PaymentHolder{
    height:100%;
    padding:5%;
    padding-bottom:10%;
  }
  .DescriptionHolder{
    background-color:white;
    height:100%;
    padding:12%;
}

}
`
export default BidPlacement;