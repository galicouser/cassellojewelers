import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const AddProduct = () => {
  return (
    <Wrapper>
      <p className="TitleText">Add Product</p>


        <p className="SubTitleText">Upload Images</p>
      <div className="MainHolder">
        <div className="ImageUploadHolder">
          <div className="ImageUpload">
            Primary Image
          </div>
          <div className="ImageUpload">
          Image Upload
          </div>
          <div className="ImageUpload">
          Image Upload
          </div>
          <div className="ImageUpload">
          Image Upload
          </div>  
        </div>
        <p className="SubTitleText">Product Name</p>
        <input  type="text" className="NameInput"/>
        <p className="SubTitleText">Product Cost</p>
        <input  type="text" className="NameInput"/>
        <p className="SubTitleText">Add Description</p>
        <input  type="text" className="DescriptionText"/>

        <Button
          varient="contained"
          className="ColoredButton">
            Upload Product
          </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  font-family: "Century Gothic", sans-serif;
  width: 75%;
  padding-top:5%;
  .TitleText {
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left: 5%;
  }
  .SubTitleText{
    font-size: 25px;
    margin-bottom:0px;
    font-weight: 100;
    color: #1c1f25;
    margin-left: 6%;
  }
  .DescriptionText{
    width:70%;
    height:250px;
    margin-top:2.5%;
    margin-left:7%;
    outline:none;
    border:none;
    border-radius:10px;
    background-color:rgb(0,0,0,0.10);
  }
  .NameInput{
    width:25%;
    height:50px;
    margin-top:2.5%;
    margin-left:7%;
    margin-bottom:1.5%;
    outline:none;
    border:none;
    border-radius:10px;
    background-color:rgb(0,0,0,0.10);
  }
  .MainHolder{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
  }
  .ImageUploadHolder{
    display:flex;
    justify-content:space-between;
    width:85%;
    font-weight:100;
    margin-left:5%;
  }
  .ImageUpload{
    width:200px;
    height:200px;
    margin:2.5%;
    border:5px dashed rgb(0,0,0,0.10);;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .ImageUpload:hover {
    cursor:pointer;
  }
 
  .ColoredButton {
    height:55px;
    width:200px;
    margin-top:2.5%;
    margin-left:7%;
    margin-bottom:2.5%;
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
  .ColoredButton: hover {
    color:black;
  }
  @media (max-width: 767px) {
    width:100%;
    .ImageUploadHolder{
        width:90%;  
      }
      .ImageUpload{
        height:150px;
        padding:2.5%
        border:5px dashed rgb(0,0,0,0.10);;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
      }
      .NameInput{
        width:65%;
        height:50px;
        margin-top:2.5%;
        margin-left:7%;
        margin-bottom:1.5%;
        outline:none;
        border:none;
        border-radius:10px;
        background-color:rgb(0,0,0,0.10);
      }
      .DescriptionText{
        width:85%;
        height:250px;
        margin-top:2.5%;
        margin-left:7%;
        outline:none;
        border:none;
        border-radius:10px;
        background-color:rgb(0,0,0,0.10);
      }
      
   
  }
`;
export default AddProduct;
