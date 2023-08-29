import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <Container>
      <Grid container gap={2} className="UpperFooter">
        <Grid item lg={12}>
          <div>
            <Grid container gap={2} className="CenteringDiv">
              <Grid item lg={5.5} className="SubDiv">
                <div className="LetterDiv">
                  <p className="LetterTitle">
                    Sign up for our newsletter to receive special offers, news
                    and great sales notifications.
                  </p>

                  <div className="EmailInputHolder">
                    <input
                      placeholder="Email"
                      type="text"
                      className="LetterEmailInput"
                    />
                    <Button variant="contained" className="SignUpButton">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item lg={5.5}>
                <div>
                  <Grid container gap={2} className="CenteringDiv">
                    <Grid item lg={3.5}>
                      <div className="LinkHolder">
                        <p className="LinkTitle">LINKS</p>
                        <div className="LinkSubTitleHolder">
                          <p className="LinkSubTitle">HOME</p>
                          <p className="LinkSubTitle">SHOP</p>
                          <p className="LinkSubTitle">COLLECTION</p>
                          <p className="LinkSubTitle">SEARCH</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={3.5}>
                      <div className="LinkHolder">
                        <p className="LinkTitle">SOCIALS</p>
                        <div className="LinkSubTitleHolder">
                          <p className="LinkSubTitle">HOME</p>
                          <p className="LinkSubTitle">SHOP</p>
                          <p className="LinkSubTitle">COLLECTION</p>
                          <p className="LinkSubTitle">SEARCH</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item lg={3.5}>
                      <div className="LinkHolder">
                        <p className="LinkTitle">LINKS</p>
                        <div className="LinkSubTitleHolder">
                          <p className="LinkSubTitle">HOME</p>
                          <p className="LinkSubTitle">SHOP</p>
                          <p className="LinkSubTitle">COLLECTION</p>
                          <p className="LinkSubTitle">SEARCH</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <div className="CenteringDiv">
        <hr className="divider" />
      </div>

     
          <div className="LowerFooter">
            <p className="LowerFooterText">
              <span style={{ color: "white",textAlign:"center" }}> Cassello </span>© 2023, Powered
              by Shopify{" "}
            </p>
          </div>
    </Container>
  );
};

const Container = styled.footer`
  height: 100%;
  background-color: #272626;
  

  .divider {
    width: 75%;
    opacity: 0.1;
  }

  .SubDiv {
    border-right: 1px solid rgba(128, 128, 128, 0.1);
  }

  .LowerFooterText {
    margin-top: 1%;
    font-size: 18px;
    font-weight: 600;
    color: #3d3b3b;
    text-align: center;
  }
  .LowerFooter {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .CenteringDiv {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
  }
  .UpperFooter {
    height: 75%;
  }

  .LetterDiv {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .EmailInputHolder {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
    width: 75%;
  }
  .LetterEmailInput {
    width: 80%;
    margin-top: 5%;
    height: 60px;
    background-color: #3d3b3b;
    border: none;
    outline: none;
  }


  .letteremailinput:focus {
    outline: none;
  }

  .LetterEmailInput::placeholder {
    color: gray;
    padding-left: 3%;
    font-size: 17px;
    font-weight: 100;
  }

  .SignUpButton {
    height: 60px;
    width: 20%;
    border-radius: 0px;
    background-color: white;
    color: black;
    margin-top: 5%;
    font-size: 13px;
    font-weight: 100;
  }
  .Signupbutton :hover {
    background-color: white;
  }

  .LetterTitle {
    font-size: 28px;
    width: 80%;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
  }
  .LinkHolder {
    display: flex;
    align-content: center;
    flex-direction: column;
  }
  .LinkTitle {
    color: white;
    font-weight: 500;
    text-align: left;
    line-height: 1.5;
    font-size: 14px;
  }
  .LinkSubTitle {
    color: white;
    font-weight: 400;
    text-align: left;
    font-size: 13px;
  }
  .LinkSubTitle:hover {
    cursor: pointer;
  }
  .LinkSubTitleHolder {
    margin-top: 15%;
  }
  @media (max-width: 767px) {
    .SignUpButton {
      font-size: 10px;
      
    }

    .LowerFooterText {
      
      text-align:center;
    }
  }
  @media (min-width: 800px) and (max-width: 950px){
    margin-top:5%;
  }

`;

export default Footer;
