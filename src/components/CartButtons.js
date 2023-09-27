import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion, AnimatePresence } from "framer-motion";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CartButton = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const signedInUser = localStorage.getItem("userName");
  const [UserOptionClicked, setUserOptionClicked] = useState(false);
  const navigate = useNavigate();

  function UserClicked() {
    setUserOptionClicked(!UserOptionClicked);
  }
  return (

    <Wrapper>
      {!signedInUser ? (
        <>
          <div className="CartHolder">
            <Link to='/cart' className='cart-btn'>
              <ShoppingCartIcon className="shoppingCart" />
              <span className="cartValue">{total_items}</span>
            </Link>

          </div>
          <Link to="/LoginPage">
            <div type="button" className="">
              <p className="FunctionText">Login</p>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="CartHolder2">
            <Link to='/cart' className='cart-btn'>
              <ShoppingCartIcon className="shoppingCart" />
              <span className="cartValue">{total_items}</span>
            </Link>
          </div>
          <div className="UserDisplay" onClick={UserClicked}>
            <PersonIcon className="UserImage" />
          </div>
        </>
      )
      }
      <AnimatePresence>
        {
          UserOptionClicked &&

          <motion.div
            className="MenuHolder"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <p
              className="MenuItem"
              onClick={() => {
                if (signedInUser == 'admin') {
                  navigate("/AdminHomePage");
                }
                else {
                  navigate("/UserHomePage");
                }
              }}
            >My Account</p>
            <p
              className="MenuItem2"
              onClick={() => {
                localStorage.setItem("userName", "");
                setUserOptionClicked(false);
                navigate("/");
              }}
            >Log Out</p>
          </motion.div>

        }
      </AnimatePresence>


    </Wrapper>
  );
};

const Wrapper = styled.div`
 height:100%;
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 width:165px;
 position:relative;
 .UserImage{
   height:40px;
   width:40px;
   padding: 0.5rem;
   border-radius:50%;
   object-fit:cover;
   &:hover{
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow;
   }
 }
 .MenuHolder{
  height:120px;
  width:170px;
  background-color:white;
  position:absolute;
  top:80px;
  right:10px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10%;
  -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
  -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
  box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
 }
 .MenuItem2{
    font-size:18px;
   text-decoration:underline;
   text-decoration-thickness: 4px;
   text-decoration-color: #D8B08C;
 }
 .MenuItem{
  font-size:18px;
  text-decoration:underline;
  text-decoration-thickness: 4px;
  text-decoration-color: #D8B08C;
 }
 .UserDisplay{
  display:flex;
  align-items:center;
 }
 .UserDisplay:hover {
  cursor: pointer;
}
.MenuItem2:hover {
  cursor: pointer;
}
.MenuItem:hover {
  cursor: pointer;
}
  .shoppingCart{
    color: #D8B08C;
    margin-right: 20%;
  }
  .FunctionText2{
    font-size:22.5px;
    padding-right:10%;
    font-weight:100;
    color:#222831;
    &:hover {
    color: #D8B08C;
    }
  }
 .FunctionText{
  font-size:22.5px;
  
    font-weight:100;
    color:#222831;
    &:hover {
    color: #D8B08C;
    }
 }
 .CartHolder{
  display:flex;
  margin-bottom:13px;
  position:relative;
 }
 .CartHolder2{
  display:flex;
  margin-right:13px;
  position:relative;
 }
 
 .cartValue{
  position:absolute;
  left:22.5px;
  bottom:16px;
  font-size:18px;
  color:white;
  background-color:black;
  width:22.5px;
  height:22.5px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  text-align:center;

 }
`;

export default CartButton;
