import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";

const UserProfileUpdate = () => {

  return (
    <Wrapper>
      <p className="Title">Update Profile</p>
      <div className="OuterHolder">
        <div className="InputFieldsHolder">
          <input type="text" placeholder="First Name" className="inputField" />
          <input type="text" placeholder="Last Name" className="inputField" />
          <input type="text" placeholder="" className="inputField" />
          <p> Update Shipping Address</p>
          <input type="text" placeholder="Address" className="inputField" />
          <input type="text" placeholder="Address (Optional)" className="inputField" />
          

          <div className="SmallInput">
          <input type="text" placeholder="Province" className="inputField2" />
          <input type="text" placeholder="Postal Code" className="inputField2" />  
          </div>

          <div className="ButtonHolder">
            <Button variant="outlined" className="ProceedButton">Update</Button>
          </div>
        </div>
      </div>



    </Wrapper>
  )
}
const Wrapper = styled.main`
font-family: "Century Gothic", sans-serif;
margin-top:5%;
width:75%;

.SmallInput{
  display:flex;
  flex-direction:row;
  justify-content: space-between;
}
.Title {
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left:5%;
    text-align:left;
  }
.ProceedButton{
    height:55px;
    width:200px;
    margin-top:5%;
    outline:none;
    color:#10454F;
    background-color: #a6705d;
    &:hover {
      background-color: black;
      border:none;
      outline:none;
    }
    color:white;
}
  .InputFieldsHolder{
    width:350px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .OuterHolder{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:5%;
  }
  .SmallFieldHolder{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
  }

.SmallInputField{
    height:55px;
    width:65%;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.SmallInputField2{
    height:55px;
    width:32.5%;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.inputField{
    height:55px;
    width:350px;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}
.inputField2{
  height:55px;
  width:49%;
    border-radius:5px;
    padding-left:2%;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
    font-size:15px;
    margin-top:1%;
}

@media (max-width: 767px) {
  width:100%;
    padding-bottom:10%;
    padding-top:5%;
}
`
export default UserProfileUpdate;