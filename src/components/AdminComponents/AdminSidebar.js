
import styled from "styled-components";
import React, { useState,useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AdminSideBar = ({ updateParentValue }) => {
  


  const [UserName,setUserName] = useState("Admin")
  const [AddProductVal, setAddProductVal] = useState(true);
  const [AddAuctionProductVal, setAddAuctionProductVal] = useState(false);
  const [RevnewPageVal, setRevnewPageVal] = useState(false);
  const [AnalyticsVal, setAnalyticsVal] = useState(false);
  const [BuyingHistoryVal, setBuyingHistoryVal] = useState(false);


  function AddProductClicked() {
    updateParentValue(1);
    setAddProductVal(true);
    setAddAuctionProductVal(false);
    setRevnewPageVal(false);
    setAnalyticsVal(false);
    setBuyingHistoryVal(false)
    setMenuData(!ShowMenuData);
  }



  function AddAuctionProduct() {
    updateParentValue(2);
    setAddProductVal(false);
    setAddAuctionProductVal(true);
    setRevnewPageVal(false);
    setAnalyticsVal(false);
    setBuyingHistoryVal(false)
    setMenuData(!ShowMenuData);
  }

  function BuyingHistory(){
    updateParentValue(3);
    setAddProductVal(false);
    setAddAuctionProductVal(false);
    setRevnewPageVal(false);
    setAnalyticsVal(false);
    setBuyingHistoryVal(true)
    setMenuData(!ShowMenuData);
  }
  function RevnewPageClicked(){
    // updateParentValue(4);
    // setWatchHistory(false);
    // setUpdateProfile(false);
    // setMenuData(!ShowMenuData);
  }
  function AnalyticsClicked(){
    // updateParentValue(5);
    // setWatchHistory(false);
    // setUpdateProfile(false);
    // setMenuData(!ShowMenuData);
  }


  //
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{
      height: "100vh",
      backgroundColor: "#272626",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            backgroundColor: "#272626",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "680px",
            padding:"5%"
          }}
        >
          <p
            className="Files"
            style={{
              fontSize: "20px",
              color: "white",
              marginTop:"5%",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr
            className="line"
            style={{ width: "50%", fontSize: "10px", 
            marginBottom:"10%",opacity: "0.2" }}
          />
 
          <h3 style={{ color: "white",marginBottom:"10%",fontWeight:100,textAlign:"center" }} onClick={AddProductClicked}>Add Product</h3>
          <h3 style={{ color: "white",marginBottom:"10%",fontWeight:100,textAlign:"center"  }} onClick={AddAuctionProduct}>Add Auction Product</h3>
          <h3 style={{ color: "white",marginBottom:"10%",fontWeight:100,textAlign:"center"  }} onClick={BuyingHistory}>Buying History</h3>

          <h3 style={{ color: "white",marginBottom:"10%",fontWeight:100,textAlign:"center"  }} onClick={RevnewPageClicked}>Revenew</h3>
          <h3 style={{ color: "white",marginBottom:"10%",fontWeight:100,textAlign:"center"  }} onClick={AnalyticsClicked}>Analytics</h3>
          
        </div>
      </Box>
    </div>
  );
  //



  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuDisplay = document.querySelector('.MenuDisplay');
      const menuIcon = document.querySelector('.menuIcon');

      if (menuDisplay && !menuDisplay.contains(event.target) && menuIcon !== event.target) {
        setMenuData(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  


  const [ShowMenuData, setMenuData] = useState(false);
  function MenuIconClicked() {
    setMenuData(!ShowMenuData);
  }

  return (
    <Wrapper>
      <div className="SideBarMainDiv">
        <p className="UserNameText">{UserName}</p>
        <hr className="Divider" />

        <div className="OptionHolder">
          <div className="Option" onClick={AddProductClicked}>
            <p className="OptionText">Add Product</p>
          </div>
          <div className="Option" onClick={AddAuctionProduct}>
            <p className="OptionText">Add Auction Product</p>
          </div>


          <div className="Option" onClick={BuyingHistory}>
            <p className="OptionText">Buying History</p>
          </div>

          <div className="Option" onClick={RevnewPageClicked}>
            <p className="OptionText">Revnew</p>
          </div>

          <div className="Option" onClick={AnalyticsClicked}>
            <p className="OptionText">Analytics</p>
          </div>
         

         
        </div>
      </div>
      <div style={{ display: "none" }}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="MenuIconHolder">
      <MoreHorizIcon className="MenuIcon"  onClick={toggleDrawer("left", true)}/>
      </div>

     
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 4.5%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: Center;
  align-content: center;
  border-right: 1px solid rgb(0,0,0,0.1);
  width: 300px;
  .UserImage {
    height: 150px;
    weight: 150px;
    border-radius: 100px;
    margin-top:17%;
    object-fit:cover;
  }
  .MenuIcon {
    display: none;
  }
  .UserNameText {
    text-align: center;
    font-size: 22px;
    font-weight: 100;
    color: #1c1f25;
  }
  .Divider {
    opacity: 0.5;
    width: 50%;
    height: 0.2px;
  }
  .OptionText {
    color: #1c1f25;
    text-align: center;
    font-size: 22px;
    font-weight: 100;
  }
  .MenuIconHolder{
    display:none;
  }
  .Option {
    width: 100%;
    margin-top: 50px;
  }
  .Option:hover {
    cursor: pointer;
  }
  .MenuDisplay{
    display:none;    
  }
  .SideBarMainDiv{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  @media (max-width: 767px) {
    height: 0px;
    width: 100%;
    margin-top:1%;
    .SideBarMainDiv {
      display: none;
    }
    .MenuIconHolder{
      display:unset;
      width:100%;
    }
    .MenuIcon{
      display:unset;
      position:absolute;
      right:12px;
      top:90px;
      font-size:50px;
    }
    
    .MenuDisplay {
      position: absolute;
      width: 100%;
      top:80px;
      display: flex;
      flex-direction: column;
      align-items: Center;
      align-content: center;
      background-color:#a6705d;
      z-index:15;
      padding:2%;
      
    }
    .ButtonText{
      font-size:20px;
      color: white;
      font-weight:100;
    }
  }

  @media (max-width: 850px) {

    width:45%;
    padding-right: 0%;
    margin-top:15%;
   
  }
`;
export default AdminSideBar;
