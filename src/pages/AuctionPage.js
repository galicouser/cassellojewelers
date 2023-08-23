import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import Button from "@mui/material/Button";
// import ProductList from "../components";
import { Filters, ProductList, Sort, PageHero } from "../components";

import heroBcg8 from "../assets/hero-bcg-8.jpg";
import Grid from "@mui/material/Grid";

const AuctionPage = () => {
    return (
        <Wrapper>
            <Navbar />

            <Grid container gap={2} className="CenteringDiv">
                <Grid item lg={5} className="ImageGridItem">
                    <div className="ImageHolder">
                        <img src={heroBcg8} className="ActiveImage" />
                    </div>
                </Grid>

                <Grid item lg={4} className="DetailGridItem">
                    <div>
                        <Grid container spacing={2}>
                            <Grid item lg={12}>
                                <div>
                                    <p className="ItemTitle">Eve's Necklace</p>
                                    <p className="MinimunBidText">Minimum bid <span style={{ color: "#023535" }}>$ 100</span></p>
                                </div>
                            </Grid>
                            <Grid item lg={12}>
                                <div>
                                    <p className="DetailsTitle">Details</p>
                                </div>
                            </Grid>
                            <Grid item lg={12}>
                                <div>
                                    <p className="DetailsText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Grid>
                            <Grid item lg={12}>
                                <div className="CollectionMain">
                                    <p className="CollectionTag">Collection</p>
                                    <div className="Collections">
                                        <div className="CollectionHolder">
                                            <img className="CollectionImage" src={"https://img.freepik.com/premium-photo/metal-corroded-texture-background_136401-1872.jpg?w=900"} />
                                            <p className="CollectionTitle">Cassello</p>
                                        </div>
                                        <div className="CollectionHolder">
                                            <img className="CollectionImage" src={"https://img.freepik.com/premium-photo/metal-corroded-texture-background_136401-1872.jpg?w=900"} />
                                            <p className="CollectionTitle">Handmade</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={12}>

                                <div className="MinimunTimeOuter">

                                    <div className="MinimunTimeInner">
                                        <p className="TitleMinimun">Minimun Bid</p>
                                        <p className="SubTitleMinimun">$ 100</p>
                                    </div>
                                    <div className="MinimunTimeInner">
                                        <p className="TitleMinimun">Time Left</p>
                                        <p className="SubTitleMinimun">0 Days 5 Hours 15 Min 60 Sec</p>
                                    </div>

                                </div>

                            </Grid>
                            <Grid item lg={12}>
                                <div>
                                    <Button variant="outlined" className="BidButton">
                                        Place a bid
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <p className="OnAuctionTitle">Products On Auction</p>
            <ProductList />
        </Wrapper>
    );
};
const Wrapper = styled.section`
padding-bottom:5%;
  background-color: #eeeeee;

.OnAuctionTitle{
    text-align:center;
    font-size:45px;
    font-weight:bold;
    margin-top: 200px;
}
 .TitleMinimun{
    font-weight:700;
    font-size:20px;
    margin-bottom:5px;
    opacity:0.60;
 }

 .SubTitleMinimun{
    font-weight:700;
    font-size:22px;
    margin-bottom:5px;
 }

  .MinimunTimeOuter{

    display:flex;
  }
  .MinimunTimeInner{
    padding-left:5%;
  }

  .CollectionMain{
  }
  .CollectionImage{
    height:30px;
    width:30px;
    border-radius:50%;
  }
  .BidButton{
    width:75%;
    height:55px;
    border-radius:10px;
    background-color:#272626;
    color:white;
    font-weight:800;
  }
  .BidButton:hover{
    background-color:white;
    color:#272626;
    border:none;
    outline:none;
  }
  .CollectionHolder{
    padding-left:2.5%;
    margin-top:0%;
    display:flex;
    flex-direction:row;
    align-items:center;
    align-content:center;
  }
  .CollectionTag{
    font-size:18px;
    font-weight:700;
    margin-top:0%;
    margin-bottom:0%;
  }
  .Collections{
    display:flex;
  }

  .CollectionTitle{
    padding-top:17px;
    padding-left:2%;
    font-weight:700;
  }

  .DetailsTitle{
    font-size:18px;
    font-weight:700;
    margin-top:0%;
    margin-bottom:0%;
  }
  .DetailsText{
    font-size:17px;
    margin-top:0%;
    margin-bottom:0%;
  }

  .ImageGridItem{
    height:80%;

  }
  .DetailGridItem{
    height:80%;
  }

  .ItemTitle {
    font-size: 50px;
    margin-top:0px;
    font-weight: bold;
    color: grey;
  }
  .MinimunBidText {
    font-size: 18px;
    font-weight: 700;
    color:#97A6A0;
  }
  .CenteringDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding-bottom:2.5%;
  }
  .ActiveImage {
    height: 100%;
    width: 100%;
    border-radius:10px;
  }
  .ImageHolder{
    height:100%;
  }
  
`;
export default AuctionPage;
