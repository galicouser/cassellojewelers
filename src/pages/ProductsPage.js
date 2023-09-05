import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import JewelImage from "../assets/imag-2.jpeg";

import { Filters, ProductList, Sort, PageHero } from "../components";
const ProductsPage = () => {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <main className="OlderVersion">


          <div className="TopAuctionBanner">
            <div className="AuctionHolder">
              <p className="AuctionTitle">Join the Auction Action Now!</p>
              <Button variant="outlined" className="MoreTitle2" >
                Place a bid
              </Button>

            </div>
          </div>

          <Wrapper className="page">
            {/* <PageHero title='products' /> */}
            <div className="section-center products">


              <div style={{ marginTop: '50px' }}>
                <Filters />
              </div>
              <div>
                <Sort />
                <ProductList />
              </div>
            </div>
          </Wrapper>
        </main>
      </Wrapper>

      <Wrapper  >
        <div className="NewVersion">
          <Grid container gap={1} className="CenteringDiv">
            <Grid item lg={12}>
              <div className="TopAuctionBanner">
                <div className="AuctionHolder">
                  <p className="AuctionTitle">Clearence Sale Upto 20% OFF!</p>
                  <Button variant="outlined" className="MoreTitle2" >
                    Check Out Now
                  </Button>
                  <div className="LightLeffect" />

                </div>
              </div>
            </Grid>

            <Grid item lg={2}>

              <div style={{ marginTop: '50px' }}>
                <Filters />
              </div>
            </Grid>
            <Grid item lg={7}>
              <Grid container gap={1} className="CenteringDiv">
                <Grid item lg={12}>
                  <div style={{ marginTop: '30px' }}>
                    <Sort />
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <div >
                    <ProductList />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2}>

              <div className="AuctioBanner">
                {/* <img src={"https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"} className="BannerImage" /> */}

                <p className="AuctionTitle">Join the Auction Action Now!</p>

                <div className="ImageHolder">
                  <img src={JewelImage} className="Image1" />
                  <img src={JewelImage} className="Image2" />
                </div>
                <div className="ImageHolder">
                  <img src={JewelImage} className="Image1" />
                  <img src={JewelImage} className="Image2" />
                </div>

                <Button variant="outlined" className="MoreTitle2" >
                  LOGIN TO BID
                </Button>


              </div>

            </Grid>


          </Grid>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
font-family: "Century Gothic", sans-serif;
  background: "#eeeeee";
  overflow:hidden;
 .AuctionHolder{
  position:relative;
  height:30vh;
  width:75%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding:8%;
  align-items:center;
  background-color:black;
 }

 .TopAuctionBanner{
  
  background-color:black;
  display:flex;
  justify-content:center;
 }
  .AuctioBanner{
    height:100vh;
    width:100%;
    border-radius:10px;
    background-color:rgb(0,0,0,1);
    position:relative;
    padding:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .MoreTitle2{
    height:50px;
    width:75%;
    border:none;
    outline:none;
    color:white;
    font-weight:1000;
    background-color:#A6705D;
    &:hover{
    background-color: black;
  }
  }

  .LightLeffect{
    position:absolute;
    left:0%;
    top:0%;
    height:100px;
    width:100px;
    background-color:#BF0426;
    
  border-radius:0px 0px 50px 50px;
  filter:blur(100px);
    
  }
  .MoreTitle{
    // height:50px;
    // width:150px;
    
    background-color:#BF0426;
    border:none;
    outline:none;
    color:white;
    font-weight:1000;
  }
  .MoreTitleTop{
    height:50px;
    width:25%;
    background-color:#BF0426;
    border:none;
    outline:none;
    color:white;
    font-weight:1000;
  }
  .AuctionTitle{
    font-size:45px;
    color:white;
    font-weight:1000;
    text-align:center;
    z-index:10;
  }
  .Image1{
    width:50%;
    background:none;

  }
  .Image2{
    width:45%;
    background:none;
    right:0%;
  }
  .ImageHolder{
    position:relative;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }

  .BannerImage{
    height:100%;
    width:100%;
    border-radius:7px;
    position:absolute;
    object-fit:cover;
    z-index:-10;
  }

  .CenteringDiv {
    margin-top:1%;
    margin-bottom:5%;
    display:flex;
    justify-content: center;
  }
  
  .OlderVersion{
    display:none;
  }

  @media (max-width: 767px) {
    margin-bottom:100px;
    .products {
      display: flex;
      flex-direction:column;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
    .TopAuctionBanner
    {
      margin-top:80px;
      height:100%;
    }
    .AuctionHolder
    {
      height:30vh;
      width:75%;
      padding:5%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color:black;
     }
     
     .MoreTitle{
      width:75%;
     }
     .AuctionTitle{
      font-size:35px;
     }
  }
  
  @media (min-width: 767px) and (max-width: 1300px) {
    .products {
      display: flex;
      flex-direction:column;
      margin-bottom: 100px;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
    .TopAuctionBanner{
      margin-top:80px;
      height:100%;
    }
    .AuctionHolder{
      height:25vh;
      width:75%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color:black;
     }
     }
     .MoreTitle{
      width:50%;
     }
    
`;

export default ProductsPage;
