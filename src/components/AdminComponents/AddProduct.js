import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { addProduct } from "../../API/productAPI";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AddProduct = () => {
  const [images, setImages] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [shipping, setShipping] = useState("");
  const [description, setDescription] = useState("");


  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };



  const handleImageChange = (event, index) => {
    const newImages = [...images];
    newImages[index] = event.target.value;
    setImages(newImages);
  };
  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };


  const handleColorChange = (event, index) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  };

  const handleAddColor = () => {
    setColors([...colors, ""]);
  };


  const handleRemoveColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  async function UploadProductClicked() {
    setOpen(true);
    const filteredImages = images.filter((image) => image.trim() !== "");
    console.log(filteredImages)
    const data = await addProduct(name, price, category, company, description, true, colors, filteredImages);
    console.log(data);


    setOpen(false);
  }
  return (
    <Wrapper>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <p className="TitleText">Add Product</p>


      <p className="SubTitleText">Add Images Links</p>
      <div className="MainHolder">
        <div className="ImageUploadHolder">
          {images.map((image, index) => (
            <div key={index} className="ImageInputWrapper">
              <div className="ImageInput">
                <input
                  type="text"
                  className="NameInput2"
                  value={image}
                  onChange={(event) => handleImageChange(event, index)}
                />
                <button
                  className="RemoveImageButton"
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <Button
            variant="contained"
            className="ColoredButton"
            onClick={handleAddImage}
          >
            Add Image
          </Button>
        </div>


        {/* Adding Color */}

        <p className="SubTitleText">Add Colors</p>

        <div>

          {colors.map((color, index) => (
            <div key={index} className="ColorInputWrapper">
              <input
                type="color"
                className="ColorInput"
                value={color}
                onChange={(event) => handleColorChange(event, index)}
              />
              <button
                className="RemoveColorButton"
                onClick={() => handleRemoveColor(index)}
              >
                X
              </button>
            </div>
          ))}
          <Button
            variant="contained"
            className="ColoredButton"
            onClick={handleAddColor}
          >
            Add Color
          </Button>
        </div>

        {/*  */}


        {/* Product Category */}
        <p className="SubTitleText">Product Category</p>
        <div className="DropdownContainer">
          <div className="Dropdown">
            <select
              className="CategorySelect"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select a category</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Earrings">Earrings</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Rings">Rings</option>
              {/* Add more category options as needed */}
            </select>
          </div>
        </div>




        <p className="SubTitleText">Product Name</p>
        <input type="text" className="NameInput" onChange={(event) => {
          setName(event.target.value);
        }} />

        <p className="SubTitleText">Company</p>
        <input type="text" className="NameInput" onChange={(event) => {
          setCompany(event.target.value);
        }} />

        <p className="SubTitleText">Product Cost</p>
        <input type="text" className="NameInput" onChange={(event) => {
          setPrice(event.target.value);
        }} />

        <p className="SubTitleText">Add Description</p>
        <textarea type="text" className="DescriptionText" onChange={(event) => {
          setDescription(event.target.value);
        }} />

        <Button
          varient="contained"
          className="ColoredButton" onClick={UploadProductClicked}>
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
    padding: 2%;
    font-size: 20px;
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
    padding-left: 2%;
    background-color:rgb(0,0,0,0.10);
  }
  .NameInput2{
    width:60%;
    height:50px;
    margin-top:2.5%;
    margin-left:7%;
    padding-left: 2%;
    margin-bottom:1.5%;
    outline:none;
    border:none;
    border-radius:10px;
    background-color:rgb(0,0,0,0.10);
  }

  .ImageInputWrapper{
    
  }

  .RemoveImageButton {
    background-color: transparent;
    border: none;
    color: #a6705d;
    font-size: 15px;
    cursor: pointer;
    margin-left: 5px;
  }


  .ColorInput{
    margin-top:2.5%;
    margin-left:7%;
    margin-bottom:1.5%;
    border-radius:3px;
  }

  .ColorInputWrapper {
    display: flex;
    align-items: center;
    margin-top: 2.5%;
    margin-left: 7%;
    margin-bottom: 1.5%;
  }

  .RemoveColorButton {
    background-color: transparent;
    border: none;
    color: #a6705d;
    font-size: 15px;
    cursor: pointer;
    margin-left: 5px;
  }

  .MainHolder{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
  }
  .ImageUploadHolder{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:85%;
    font-weight:100;
    margin-left:1%;
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
    color:white;
    background-color: #a6705d;
    &:hover {
      background-color: black;
      border:none;
      outline:none;
      color: #a6705d;
    }
    
  }

  .DropdownContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Dropdown {
    position: relative;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 5%;
  }

  .CategorySelect {
    width: 100%;
    padding: 10px;
    border: 2px solid #a6705d; // Retro border color
    background-color: transparent;
    color: #1c1f25; // Retro text color
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .CategorySelect:focus {
    border-color: #000; // Retro border color when focused
  }

  .CategorySelect option {
    background-color: #f9f9f9; // Retro option background color
    color: #1c1f25; // Retro option text color
  }

  // Add animation here
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .CategorySelect {
    animation: fadeIn 0.5s ease; // Animation on select open
  }

   
  @media (max-width: 767px) {
    width:100%;
    .ImageUploadHolder{
        width:90%;  
      }
      .NameInput2{
        width:95%;
       
      }
      .ImageUpload{
        height:150px;
        padding:2.5%;
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
