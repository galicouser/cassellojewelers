import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";

const EditUserShippingAddress = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'currentPassword':
        // You can add validation for the current password here if needed
        break;
      case 'newPassword':
        // Validate the new password (at least 8 characters with alphanumeric and special characters)
        if (value.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)) {
          setError('Password must be at least 8 characters with alpha-numeric and special characters.');
        } else {
          setError('');
        }
        break;
      case 'repeatNewPassword':
        // Validate the repeat new password (should match new password)
        if (value !== newPassword) {
          setError('Passwords do not match.');
        } else {
          setError('');
        }
        break;
      default:
        break;
    }

    // Update the corresponding state
    switch (name) {
      case 'currentPassword':
        setCurrentPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'repeatNewPassword':
        setRepeatNewPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <p className="Title">Update Password</p>
      <div className="OuterHolder">
        <div className="InputFieldsHolder">
        <input
        type="text"
        name="currentPassword"
        placeholder="Current Password"
        className="inputField"
        value={currentPassword}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="newPassword"
        placeholder="New Password"
        className="inputField"
        value={newPassword}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="repeatNewPassword"
        placeholder="Repeat New Password"
        className="inputField"
        value={repeatNewPassword}
        onChange={handleInputChange}
      />
      {error && <div className="error-message">{error}</div>}
      

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

@media (max-width: 767px) {
  width:100%;
    padding-bottom:10%;
    padding-top:5%;
}
`
export default EditUserShippingAddress;