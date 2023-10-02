import styled from "styled-components";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from '@mui/material/Button';

const Support = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [EditProduct, setEditProduct] = useState(false);
  const [EditAuctionProduct, setEditAuctionProduct] = useState(false);
  const [EditList, setEditList] = useState(false);

  function EditProductClicked() {
    setEditProduct(true);
    setEditAuctionProduct(false);
    setEditList(false);
  }
  function EditAuctionProducrClicked() {
    setEditProduct(false);
    setEditAuctionProduct(true);
    setEditList(false);
  }
  function EditListClicked() {
    setEditProduct(false);
    setEditAuctionProduct(false);
    setEditList(true);
  }
  function BackButtonClicked (){
    setEditProduct(false);
    setEditAuctionProduct(false);
    setEditList(false);
  }

  return (
    <Wrapper>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <p className="TitleText">Support</p>

      {!EditProduct && !EditAuctionProduct && !EditList ? (
        <div className="TutorialHolder">
          <div className="TutorialThumbnail" onClick={EditProductClicked}>
            <p className="Title">How to Edit Product</p>
            <img
              src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              className="Image"
            />
          </div>
          <div
            className="TutorialThumbnail"
            onClick={EditAuctionProducrClicked}
          >
            <p className="Title">How to Edit Auction</p>
            <img
              src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              className="Image"
            />
          </div>
          <div className="TutorialThumbnail" onClick={EditListClicked}>
            <p className="Title">How to Edit List</p>
            <img
              src="https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              className="Image"
            />
          </div>
        </div>
      ) : (
        <>
        {EditProduct && 
        <div className="EditProductHolder">
          <p className="Title">Edit Product Instructions</p>
          <Button variant="contained" className="BackButton" onClick={BackButtonClicked}>Go Back</Button>
        </div>}
        
        {EditAuctionProduct && 
        <div className="EditProductHolder">
         <p className="Title">Edit Auction Product Instructions</p>
         <Button variant="contained" className="BackButton" onClick={BackButtonClicked}>Go Back</Button>
         </div>}
        
        {EditList && 
        <div className="EditProductHolder">
         <p className="Title">Edit List Instructions</p>
         <Button variant="contained" className="BackButton" onClick={BackButtonClicked}>Go Back</Button>
         
        </div>}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  font-family: "Century Gothic", sans-serif;
  padding-top: 5%;
  .TitleText {
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left: 5%;
  }
  .BackButton{
    font-family: "Century Gothic", sans-serif;
    background-color: #a6705d;
    &:hover {
      background-color: black;
    }
  }
 
  .EditProductHolder{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .TutorialHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    width: 100%;
    margin-top: 1%;
  }

  .TutorialThumbnail {
    width: 28%;
    background-color: rgb(255, 255, 255, 0.2);
    padding: 1%;
    background-color: #1c1f25;
    border-radius: 10px;
    &:hover{
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    transition: 0.5s ease-in box-shadow;
  }
  }
  .TutorialThumbnail:hover {
    cursor: pointer;
  }
  .Image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
  }
  .Title {
    text-align: center;
    font-size: 25px;
    font-weight: 100;
    color: white;
    white-space: pre-line;
    height: 50px;
  }

  @media (max-width: 767px) {
    width: 100%;
    .TutorialHolder {
      flex-direction: column;
    }
    .TutorialThumbnail {
      width: 85%;
      margin-top: 5%;
    }
    .EditProductHolder{
      margin-bottom: 5%;
    }
    .TutorialHolder{
      margin-bottom: 10%;
    }
  }
`;
export default Support;