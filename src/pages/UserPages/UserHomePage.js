import styled from "styled-components";
import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import EditUserShippingAddress from "../../components/UserComponents/EditUserShippingAddress";
import UserSideBar from "../../components/UserComponents/UserSidebar";
import UserPurchaseHistory from "../../components/UserComponents/UserPurchaseHistory";
import UserProfileUpdate from "../../components/UserComponents/UserProfileUpdate";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


const UserHomePage = () => {
  const [CurrentScreen, setCurrentScreen] = useState(1);
  const [isVerfied, setIsVerfied] = useState(false);
  const signedInUser = localStorage.getItem("userName");
  const signedInUserVerification = localStorage.getItem("userVerification");


  const handleValueUpdate = (newValue) => {
    setCurrentScreen(newValue);
  };

  useEffect(() => {
    if (signedInUserVerification == 'false') {
      setIsVerfied(false);
    }
    else {
      setIsVerfied(true);
    }
  }, []);



  function ScreenDisplay() {
    if (CurrentScreen === 1) {
      return <UserPurchaseHistory />;
    }
    if (CurrentScreen === 2) {
      return <UserProfileUpdate />;
    }
    if (CurrentScreen === 3) {
      return <EditUserShippingAddress />;
    }

  }


  return (
    <>
    <Navbar />
      <Wrapper>

        {isVerfied ?
          (
            <div className="FlexRowDiv">
              <UserSideBar updateParentValue={handleValueUpdate} />
             
             <div className="ScreenHolder">{ScreenDisplay()}</div> 
              <div className="LightEffect"></div>
            </div>
          ) : (
            <>
              <div className="VerficationHolder">
                <p className="ErrorMessage">
                  Please Check Your Email For Verification Mail!
                </p>
                <Link to="/">
                  <Button variant="contained" className="Button">Home</Button>
                </Link>
              </div>
            </>
          )
        }


      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  background-color: #f9f9f9;
  
  font-family: "Century Gothic", sans-serif;
  .LightEffect {
    border-radius: 150px 0 0 150px; /* The first two values (150px 150px) define the top-left and top-right radii, while the last two (0 0) define the bottom-left and bottom-right radii, making them 0 to create a straight edge */
    opacity: 0.800000011920929;
    background:  #a6705d;
    filter: blur(100px);
    width: 150px;
    z-index: 1;
    height: 350px;
    position: absolute;
    right: 0px;
    top: 75%;
  }
  .ScreenHolder{
    width:75%;
  }
  .Button{
    height: 50px;
    width: 200px;
    margin-top: 2.5%;
    background-color: #a6705d;
    &:hover {
      background-color: black;
      border: none;
      outline: none;
    }
    color: white;
  }
  .VerficationHolder{
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .ErrorMessage{
    font-size:3rem;
    margin-top:10%;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }

  .FlexRowDiv {
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
  }
  
  @media (max-width: 767px) {
    margin-top:80px;
    .FlexRowDiv {
      display: flex;
      flex-direction: column;
    }
    .ScreenHolder{
      width:100%;
    }
    .LightEffect {
      display: none;
    }
    .ErrorMessage{
      font-size:2rem;
      margin-top:10%;
      width: 100%;
      text-align: center;
      padding: 2rem;
    }
  }
  @media (min-width: 800px) and (max-width: 950px){
    margin-top:80px;
  }
`;
export default UserHomePage;
