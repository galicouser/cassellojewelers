import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Services = () => {
  return (
    <Wrapper>
      <Grid container gap={2} className="CenteringDiv">
        <Grid item lg={9}>
          <div>
            <Grid container gap={2}>
              <Grid item lg={6} sm={12} md={12}>
                <div>
                  <img
                    className="Image"
                    src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  />
                </div>
              </Grid>
              <Grid item lg={5.8} md={12}>
                <div className="TextHolder">
                  <p className="Title">Designed for Those Who Evade Limits</p>
                  <p className="SubTitle">
                    Paying attention to intricate details is an enduring quality. For our fifth anniversary, we envisioned no finer gift than a set of exquisite jewelry pieces from the Cassello collection. Whenever I glance at these ornaments, I'm reminded of her, and I'm certain that she holds me in her thoughts as well.
                  </p>
                  <Button variant="outlined" className="MoreTitle">
                    Read Our Story
                  </Button>
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
  margin-top:10%;
  margin-bottom:5%;
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
    color: #222831;
    border: 4px solid rgb(0, 0, 0, 0.2);
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
export default Services;