import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ServicesReverse = () => {
  return (
    <Wrapper>
      <Grid container gap={2} className="CenteringDiv">
        <Grid item lg={9}>
          <div>
            <Grid container gap={2}>
              
              <Grid item lg={5.8}>
                <div className="TextHolder">
                  <p className="Title">Swiss Essence</p>
                  <p className="SubTitle">
                  When one thinks of "an exquisite piece of jewelry," the immediate connection is often with creations from renowned jewelry houses. Have you ever wondered what sets these jewelry pieces apart and makes them truly remarkable?
                  </p>
                  <Button variant="outlined" className="MoreTitle">
                    Learn More
                  </Button>
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div>
                  <img
                    className="Image"
                    src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=556&q=80"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-family: "Century Gothic", sans-serif;
  margin-top:5%;
  padding-bottom:5%;
  .CenteringDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .MoreTitle {
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 180px;
    color: black;
    border: 4px solid rgb(0, 0, 0, 0.2);
    margin-top:5%;
  }

  .MoreTitle:hover {
    background-color: black;
    border: none;
    color: white;
  }
  .Image {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
  .TextHolder {
    height: 100%;
    padding-left:5%;
  }
  .SubTitle {
    font-size: 18px;
    font-weight: 100;
  }

  .Title {
    font-size: 45px;
    font-weight: 700;
  }
`;
export default ServicesReverse;
