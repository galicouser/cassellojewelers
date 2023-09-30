import styled from "styled-components";
import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import AdminSideBar from "../../components/AdminComponents/AdminSidebar";

import AdminBuyingHistory from "../../components/AdminComponents/AdminBuyHistory";
import AddProduct from "../../components/AdminComponents/AddProduct";
import AddAuctionProduct from "../../components/AdminComponents/AddAuctionProduct";
import Nav from "../../components/Navbar";
import Support from "../../components/AdminComponents/Support";
import Resources from "../../components/AdminComponents/Resources";



const AdminHomePage = () => {
  const [CurrentScreen, setCurrentScreen] = useState(1);

  const handleValueUpdate = (newValue) => {
    setCurrentScreen(newValue);
  };


  function ScreenDisplay() {
    if (CurrentScreen === 1) {
      return <AddProduct />;
    }
    if (CurrentScreen === 2) {
      return <AddAuctionProduct />;
    }
    if (CurrentScreen === 3) {
      return <AdminBuyingHistory />;
    }

    if (CurrentScreen === 6) {
      return <Support />;
    }


    if (CurrentScreen === 7) {
      return <Resources />;
    }

  }


  return (
    <>
      <Navbar />
      <Wrapper>


        <div className="FlexRowDiv">
          <AdminSideBar updateParentValue={handleValueUpdate} />
          <div className="ScreenHolder">
            {ScreenDisplay()}
          </div>
          <div className="LightEffect"></div>
        </div>

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
    width:80%;
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
    .LightEffect {
      display: none;
    }
    .ScreenHolder{
      width:100%;
    }
  }
  @media (min-width: 800px) and (max-width: 950px){
    margin-top:80px;
  }
`;
export default AdminHomePage;
