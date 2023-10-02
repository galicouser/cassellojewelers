import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { editShiping } from "../../API/authAPI";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const UserProfileUpdate = () => {
  const [address, setAddress] = useState(localStorage.getItem('userAddress'));
  const [state, setState] = useState(localStorage.getItem('userProvince'));
  const [postCode, setPostCode] = useState(localStorage.getItem('userPostCode'));
  const [country, setCountry] = useState(localStorage.getItem('userCountry'));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(localStorage.getItem('userCity'));
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleUpdate = async () => {
    setOpen(true);
    const userName = localStorage.getItem('userName')
    const data = await editShiping(userName, address, city, state, country, postCode);
    setOpen(false);

    localStorage.setItem('userAddress', address);
    localStorage.setItem('userCity', city);
    localStorage.setItem('userProvince', state);
    localStorage.setItem('userCountry', country);
    localStorage.setItem('userPostCode', postCode);
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

      <p className="Title">Update Profile</p>
      <div className="OuterHolder">
        <div className="InputFieldsHolder">
          <input
            type="text"
            placeholder="First Name"
            className="inputField"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="inputField"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ marginTop: '5%' }}> Update Shipping Address</p>
          <input
            type="text"
            placeholder="Address"
            className="inputField"
            value={address === 'null' ? '' : address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="SmallInput">
            <input
              type="text"
              placeholder="State"
              className="inputField2"
              value={state === 'null' ? '' : state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="inputField2"
              value={postCode === 'null' ? '' : postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="City"
            className="inputField"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />


          <input
            type="text"
            placeholder="Country"
            className="inputField"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <div className="ButtonHolder">
            <Button
              variant="outlined"
              className="ProceedButton"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
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