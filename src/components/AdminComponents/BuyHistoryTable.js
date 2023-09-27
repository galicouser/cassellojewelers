import React, { useState } from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useProductsContext } from '../../context/products_context';
import { editProduct } from '../../API/productAPI';

const BuyHistoryTable = () => {

  const [images, setImages] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [shipping, setShipping] = useState("");
  const [description, setDescription] = useState("");


  const { products } = useProductsContext();
  const [flag, setFlag] = useState(false);
  const [editProd, setEditProd] = useState(null);




  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'black',
      color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

  // Step 2: Create a click event handler function
  const handleRowClick = (product) => {
    setEditProd(product);
    setFlag(!flag);
    // Populate state variables with the selected product data
    setName(product.name);
    setPrice((product.price / 100).toFixed(2));
    setCategory(product.category);
    setCompany(product.company);
    setShipping(product.shipping);
    setDescription(product.description);
    setImages([...product.image]); // Make a copy of the image array
    setColors([...product.colors]);
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

    const filteredImages = images.filter((image) => image.trim() !== "");
    console.log(filteredImages)
    const data = await editProduct(editProd.id ,name, price, description, colors, images, category, company);
    console.log(data);
    setFlag(false);
    setEditProd(null);
    setImages("");
    setColors("");
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
  }

  return (
    <>

      {!flag &&
        <Wrapper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Product Image</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">ID</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <StyledTableRow
                    key={product.id}
                    onClick={() => handleRowClick(product)}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="Image"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">{product.name}</StyledTableCell>
                    <StyledTableCell align="right">{`$${(
                      product.price / 100
                    ).toFixed(2)}`}</StyledTableCell>
                    <StyledTableCell align="right">{product.id}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>}

      {flag &&

        <Wrapper2>
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
            <input type="text" className="NameInput" 
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }} />

            <p className="SubTitleText">Company</p>
            <input type="text" className="NameInput" value={company} onChange={(event) => {
              setCompany(event.target.value);
            }} />

            <p className="SubTitleText">Product Cost</p>
            <input type="text" className="NameInput" value={price} onChange={(event) => {
              setPrice(event.target.value);
            }} />

            <p className="SubTitleText">Add Description</p>
            <textarea type="text" className="DescriptionText" value={description} onChange={(event) => {
              setDescription(event.target.value);
            }} />

            <Button
              varient="contained"
              className="ColoredButton" onClick={UploadProductClicked}>
              Edit Product
            </Button>
          </div>
        </Wrapper2>
      }

    </>
  );
};

const Wrapper = styled.section`
  font-family: 'Century Gothic', sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  padding-right: 5%;
  width: 100%;
  padding-bottom: 5%;

  .Image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding-right: 2.5%;
  }

  @media (min-width: 800px) and (max-width: 1400px) {
    width: 660;
    padding-right: 0%;
  }



`;


const Wrapper2 = styled.section`
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

export default BuyHistoryTable;
