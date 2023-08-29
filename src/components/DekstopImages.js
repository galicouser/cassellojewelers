import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import heroBcg3 from "../assets/hero-bcg-3.jpg";
import heroBcgt from "../assets/hero-bcg-2.jpg";
import heroBcg4 from "../assets/hero-bcg-4.jpg";
import heroBcg5 from "../assets/hero-bcg-5.jpg";
import heroBcg8 from "../assets/hero-bcg-8.jpg";

import image_2 from "../assets/image-3.jpg";
import image_3 from "../assets/image-4.jpeg";
import image_4 from "../assets/image-5.png";

const DekstopImages = () => {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [loading4, setLoading4] = useState(true);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        // Check if all loading states are false
        if (!loading && !loading2 && !loading3 && !loading4) {
            setAllLoaded(true);
        } else {
            setAllLoaded(false);
        }
    }, [loading, loading2, loading3, loading4]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    function handleLoad() {
        setLoading(false);
    }
    function handleLoad2() {
        setLoading(false);
    }
    function handleLoad3() {
        setLoading(false);
    }
    function handleLoad4() {
        setLoading(false);
    }


    return (
        <Wrapper>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    zIndex: 0,
                }}
            >
                {allLoaded &&
                    <div className="ProgressHolder">
                        <CircularProgress
                            style={{ height: 200, width: 200, color: "grey" }}
                        />
                    </div>
                }
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        sx={{
                            flexGrow: 1,
                            backgroundColor: "purple",
                            height: "90vh",
                            width: "100%",
                        }}
                    >
                        <Grid
                            sx={{ width: "100%", height: "50%" }}
                            item
                            xs={8}
                            className="image-grid"
                        >
                            <div className="i1">
                                <img src={heroBcg3} onLoad={handleLoad} className="image1" />
                            </div>
                        </Grid>
                        <Grid
                            sx={{
                                width: "100%",
                                height: "50%",
                                backgroundColor: "silver",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            item
                            xs={4}
                            className="image-grid"
                        >
                            <div className="i1">
                                <img src={heroBcgt} onLoad={handleLoad2} className="image1" />
                            </div>
                        </Grid>
                        <Grid
                            sx={{
                                width: "100%",
                                height: "50%",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            item
                            xs={4}
                            className="image-grid"
                        >
                            <div className="i1">
                                <img src={heroBcg5} onLoad={handleLoad3} className="image1" />
                            </div>
                        </Grid>
                        <Grid
                            sx={{ width: "100%", height: "50%", backgroundColor: "green" }}
                            item
                            xs={8}
                            className="image-grid"
                        >
                            <div className="i1">
                                <img src={heroBcg8} onLoad={handleLoad4} className="image1" />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


  .ProgressHolder {
    font-size: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .i1 {
    background: white;
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.3rem;
  }

  .image-grid {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 100%
      );
      opacity: 1;
    transition: opacity 2s ease-in-out;
    }
  }

  .image-grid:hover::before {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .image1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DekstopImages;
