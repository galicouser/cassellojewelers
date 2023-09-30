import styled from "styled-components";
import { useState, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Resources = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <Wrapper>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <p className="TitleText">Resources</p>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  font-family: "Century Gothic", sans-serif;
  width: 75%;
  padding-top:5%;
  .TitleText {
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left: 5%;
  }
  
  @media (max-width: 767px) {
    width:100%;
 
  }
`;
export default Resources;
