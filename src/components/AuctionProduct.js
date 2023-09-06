import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";


const AuctionProductList = ({ image, name, price, id }) => {
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

  const [Rating, setRating] = useState(9);
  const [ProductDiscription, setProductDescription] = useState(
    "Eve's Necklace: Nature's beauty in a delicate pendant."
  );
  return (
    <Wrapper>
      {/* to={`/products/${id}`}   Add this later to navigate to the Auction Page  */}
      <Link className="link">
        <div className="container">
          <img src={image} alt={name} className="image" />
        </div>
        <footer>
          {/* <div className="GroupHolder">
            <GroupsIcon className="GroupIcon" />
            <div className="RatingCount">{Rating}/10</div>
          </div> */}

          <div className="title-holder">
            <p className="ProductDiscription">{ProductDiscription}</p>
          </div>

          <div className="CenteringDiv">
            <div className="CostnTime">
              {/* <p className="CostText">
                  Cost <span style={{ fontWeight: "bold" }}>$ 100</span>
                </p> */}
              <p className="TimeLeft">{formatTime(remainingTime)}</p>
            </div>
            <div>
              <Link to="/SingleAuctionProductPage">
                <Button variant="contained" color="primary" className="BitButton">
                  View Product
                </Button>
              </Link>
            </div>
          </div>


        </footer>
      </Link>

    </Wrapper>
  );
};
const Wrapper = styled.article`
  height: 500px;
  border-radius: 10px;
  background-color: black;
  font-family: "Century Gothic", sans-serif;

  &:hover {
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
    box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
    transition: 0.5s ease-in box-shadow;
  }
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  .BitButton {
    width: 100%;
    margin-left: 5%;
    background-color: #a6705d;
    &:hover {
      background-color: black;
    }
  }

  .CenteringDiv {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .CostnTime {
  }
  
  .CostText {
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 5px;
    color: white;
    margin-bottom: 0px;
  }
  .TimeLeft {
    font-size: 18px;
    font-weight: 700;
    color: white;
    letter-spacing: 5px;
  }
  .GroupHolder {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    padding-left: 5%;
    padding-top: 1.5%;
  }
  .GroupIcon {
    font-size: 30px;
    color: rgb(255, 255, 255, 0.85);
  }
  .RatingCount {
    font-size: 18px;
    font-weight: 700;
    padding-left: 12px;
    color: white;
  }

  .title-holder{
    width: 100%;
    height: 30%;
    text-align: center;
  }
  .ProductDiscription {
    font-size: 20px;
    font-weight: 200;
    color: rgb(255, 255, 255, 0.95);
    width: 100%;
  }

  .container {
    height: 70%;
    position: relative;
    background: var(--clr-black);
    border-radius: 20px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: var(--transition);
    background-color: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  .name-holder {
    width: 100%;
    height: 30%;
    display: grid;
    justify-content: center;
  }

  .price-holder {
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: grid;
    justify-content: center;
  }

  @media (max-width: 767px) {
    height: 500px;
    .BitButton{
      width:100%;
    }

    .CenteringDiv{
      display: grid;
    }

    .container {
      height: 55%;
      position: relative;
      background: var(--clr-black);
      border-radius: var(--radius);
    }

    .CostnTime {
      text-align: center;
  }
  
  }

  @media (min-width: 800px) and (max-width: 950px) {
    height: 525px;
  }
`;
export default AuctionProductList;
