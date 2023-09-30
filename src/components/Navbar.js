import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


const useColorRotation = (colors, delay) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [colors, delay]);

  return colors[colorIndex];
};

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const { openSidebar } = useProductsContext();
  const [MenuClicked, setMenuClicked] = useState(false);
  const { myUser, loginWithRedirect } = useUserContext();
  const navigate = useNavigate();

  const [UserOptionClicked, setUserOptionClicked] = useState(false);

  const [MenuOptionClicked, setMenuOptionClicked] = useState(false);

  const signedInUser = localStorage.getItem("userName");
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  function UserClicked() {
    setUserOptionClicked(!UserOptionClicked);
    setMenuOptionClicked(false);
  }
  function MenusClicked() {
    setMenuOptionClicked(!MenuOptionClicked);
    setUserOptionClicked(false)
  }


  useEffect(() => {
    // Call handleScroll once to update the initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Mobile Size Menu bar event listeners
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function MenuhandleClick() {
    setMenuClicked(!MenuClicked);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <NavContainer navbar={navbar}>
      <div id='dekstop-screensize' className='dekstop'>
        <div className='nav-center'>

          <ul className='nav-links'>
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <Link to={url}>
                    <p className='HeaderText'>{text}</p>

                  </Link>

                </li>
              )
            })}
          </ul>

          <div className='nav-header'>
            <Link to='/'>
              <p className='LogoName'>Cassello </p>
            </Link>

          </div>

          <CartButtons />

        </div>
      </div>


      <div id='mobile-screensize' className='mobile'>

        <div className='mobile-header'>
          <Link to='/'>
            <p className='LogoName'>Cassello </p>
          </Link>
        </div>
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
                className="MenuItem"
                onClick={() => {
                  localStorage.setItem("userName", "");
                  setUserOptionClicked(false);
                  navigate("/");
                }}
              >Log Out</p>
            </motion.div>

          }
        </AnimatePresence>

        <AnimatePresence>
          {
            MenuOptionClicked &&

            <motion.div
              className="MenuHolder"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}>

                 <Link to='/'>
                <p className="MenuItem">Home</p>
                  </Link>
             <Link to='/about'>
              <p className="MenuItem">About</p>
                </Link>

                <Link to='/products'>
               <p className="MenuItem"
                  >Products</p>
                  </Link>
            </motion.div>

          }
        </AnimatePresence>



        <div className='icons-holder'>
          {signedInUser ? (
            <>
              <PersonIcon className='icon' onClick={UserClicked} />
              <Link to='/cart' className='cart-btn'>
                <ShoppingCartIcon className='icon' />
              </Link>

              <MenuIcon className='icon' onClick={MenusClicked} />
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {links.map((link) => {
                  const { id, text, url } = link
                  return (
                    <li key={id}>
                      <Link to={url}>
                        <MenuItem onClick={handleClose}><p className='HeaderText'>{text}</p></MenuItem>
                      </Link>

                    </li>
                  )
                })}
                {signedInUser && (
                  <li>
                    <Link to='/checkout'>
                      <MenuItem onClick={handleClose}><p className='HeaderText'>Checkout</p></MenuItem>
                    </Link>
                  </li>
                )}
              </Menu>
            </>
          ) : (
            <>
              <p className='icon-menu' onClick={MenuhandleClick} >Menu</p>
              <AnimatePresence>
                {MenuClicked &&
                  <motion.div className='SlidingMenu'
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }}
                    exit={{ y: '-100%', opacity: 0 }}>
                    {links.map((link) => {
                      const { id, text, url } = link
                      return (
                        <div key={id} className='LinkItem'
                        >
                          <ArrowRightIcon className='MenuArrow' />
                          <Link to={url}>
                            <MenuItem onClick={handleClose}><div className='HeaderText'>{text}</div></MenuItem>
                          </Link>
                        </div>
                      )
                    })}
                  </motion.div>
                }

              </AnimatePresence>

              {/* <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {links.map((link) => {
                  const { id, text, url } = link
                  return (
                    <li key={id}>
                      <Link to={url}>
                        <MenuItem onClick={handleClose}><p className='HeaderText'>hey{text}</p></MenuItem>
                      </Link>
                    </li>
                  )
                })}
                {myUser && (
                  <li>
                    <Link to='/checkout'>
                      <MenuItem onClick={handleClose}><p className='HeaderText'>Checkout</p></MenuItem>
                    </Link>
                  </li>
                )}
              </Menu> */}

              <div className='icon'>
                <Link to="/LoginPage">
                  <p>
                    <p className='icon-menu'>Login</p>
                  </p>
                </Link>
              </div>

            </>
          )}
        </div>

      </div>

    </NavContainer>
  )
}

const NavContainer = styled.nav`
  z-index: 1;
  width: 100%;
  background-color: ${({ navbar }) => (navbar ? '#323133' : 'transparent')};
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  transition: background-color 0.3s ease-in-out; /* Adding transition effect */

  position:relative;

  .dekstop{
    display: unset;
  }
  .MenuHolder{
    // height:200px;
    width:170px;
    background-color:white;
    position:absolute;
    top:78px;
    right:10px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:6%;
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
   }
   .MenuItem{
    font-size:22px;
    text-decoration:underline;
    text-decoration-thickness: 4px;
    text-decoration-color: #D8B08C;
    text-align:center;
   }

  .mobile{
    display:none;
  }

  .SlidingMenu{
    position:absolute;
    background-color:white;
    top:77px;
    width:93%;
  }
  .LinkItem{
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:2%;
  }
  .MenuArrow{
    font-size:30px;
  }

  .nav-center{
    display: flex;
    justify-content:space-evenly;
    width:100%;
    background-color:white;
  }

  .nav-links {
    width:250px;

  }


  .HeaderText{
    font-size:20px;

    font-weight:100;
    color:#222831;
    &:hover {
    color: #D8B08C;
    }
    &::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: center;
    margin-right: 5%;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

  .LogoName{
    width:100%;
    font-size:35px;
    font-weight:700;
    color:#222831;
  }


  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #74b49b;

    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .cart-btn-wrapper {
    display: none;
  }



  @media (min-width: 992px) {

    .dekstop {
      display: unset;
    }

    .mobile {
      display: none;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin-left:15%;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.5rem;

      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }

  @media (max-width: 767px) {
    position:fixed;
    z-index:100;
    background-color:rgb(0,0,0,0.95);
    background-color: ${({ navbar }) => (navbar ? 'rgb(0,0,0,0.95)' : 'white')};


    top:0;
    height:100px;
    width:100%;

  }
  @media (min-width: 800px) and (max-width: 950px) {
    position:fixed;
    z-index:100;
    background-color:white;
    top:0;

  }


  @media (max-width: 992px) {
    height: 80px;
    .dekstop{
      display: none;
    }
    .mobile{
      display: unset;
      display:flex;
    }
    .mobile-header{
      width: 50%;
      padding: 1rem;
    }
    .icons-holder {
      width: 50%;
      padding: 1rem;
      display: flex; /* Use flex display to align items */
      justify-content: flex-end; /* Align items to the right side */
      align-items: center; /* Center items vertically */
    }

    .icon{
      justify-content: end;
      vertical-align: middle;
      font-size: 30px;
      margin-left: 15px;
      color: ${({ navbar }) => (navbar ? 'white' : '#222831')};
    }
    .icon-menu{
      justify-content: end;
      vertical-align: middle;
      font-size: 20px;
      margin-left: 15px;
      font-weight:100;
      color: ${({ navbar }) => (navbar ? 'grey' : '#222831')};
    }
    .cart-btn {
      color: var(--clr-grey-1);
      font-size: 1.5rem;
      color: var(--clr-grey-1);
      display: flex;
      align-items: center;
    }
    .LogoName{
      width:100%;
      font-size:35px;
      font-weight:500;

      color: ${({ navbar }) => (navbar ? 'grey' : '#222831')};

    }
  }

`

export default Nav
