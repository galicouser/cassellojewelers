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
          <div className="GroupHolder">
            <GroupsIcon className="GroupIcon" />
            <div className="RatingCount">{Rating}/10</div>
          </div>
          <p className="ProductDiscription">{ProductDiscription}</p>

          <div className="CenteringDiv">
            <div className="LowerHolder">
              <div className="CostnTime">
                <p className="CostText">
                  Cost <span style={{ fontWeight: "bold" }}>$ 100</span>
                </p>
                <p className="TimeLeft">{formatTime(remainingTime)}</p>
              </div>
              <div>
                <Link to="/SingleAuctionProductPage">
                <Button variant="outlined" className="BitButton">
                  Place a bid
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </Link>
    
    </Wrapper>
  );
};
const Wrapper = styled.article`
  height: 100%;
  border-radius: 10px;
  background-color: black;

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
  .LowerHolder {
    display: flex;
    padding-top: 5%;
    justify-content: space-between;
    width: 90%;
  }
  .BitButton {
    background-color: #260104;
    width: 250px;
    height: 50px;
    color: white;
    margin-top: 1.5%;
    border: 5px solid rgb(255, 255, 255, 0.75);
    font-weight: bold;
  }
  .BitButton:hover {
    background-color: white;
    outline: none;
    border: 5px solid rgb(0, 0, 0, 0.85);
    color: black;
  }
  .CostnTime {
  }
  .CenteringDiv {
    display: flex;
    justify-content: center;
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
  .ProductDiscription {
    padding-left: 5%;
    font-size: 25px;
    font-weight: bold;
    color: rgb(255, 255, 255, 0.95);
    width: 75%;
  }

  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  .image {
    width: 100%;
    height: 220px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color: none;
  }
  .link {
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    } */
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
    height: 100%;
    .BitButton{
      width:120px;
    }
  }

  @media (min-width: 800px) and (max-width: 950px) {
    height: 525px;
  }
`;
export default AuctionProductList;
