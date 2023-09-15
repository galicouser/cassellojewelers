import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Navbar } from "../components";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";
import { loginUser, signupUser } from "../API/authAPI";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useUserContext } from "../context/user_context";
import { useNavigate } from 'react-router-dom';

//import { useDispatch } from 'react-redux';
// import { logoutUser } from './redux/actions'; 

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const LoginPage = () => {

  const navigate = useNavigate();

  const [LoginPage, setLoginPage] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { loginWithRedirect, logout, myUser } = useUserContext();
  const [PasswordVisibility, setPasswordVisibility] = useState(true);

  const [SignUpPasswordVisibility, setSignUpPasswordVisibility] = useState(true);
  const [SignUpRepeatPasswordVisibility, setSignUpRepeatPasswordVisibility] = useState(true);



  function RepeatEyeClicked() {
    setSignUpRepeatPasswordVisibility(!SignUpRepeatPasswordVisibility);
  }
  function SignUpEyeClicked() {
    setSignUpPasswordVisibility(!SignUpPasswordVisibility);

  }

  //const dispatch = useDispatch();


  // const handleLogin = () => {
  //   loginWithRedirect(); // Initiate Auth0 login
  // };

  // const handleLogout = () => {
  //   logout(); 
  //   dispatch(logoutUser()); 
  // };



  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  function EyeClicked() {
    setPasswordVisibility(!PasswordVisibility);
  }

  function GetRegisteredClicked() {
    console.log("Here")
    setLoginPage(!LoginPage);
  }
  const [ToggleBoolean, setToggleBoolean] = useState(false);
  const handleClick = () => {
    setToggleBoolean(!ToggleBoolean);
  };
  const handleUsernameChange = (e) => {

    const inputValue = e.target.value;
    setUsername(inputValue);
    const isUsernameValid = /^[A-Za-z][A-Za-z0-9]{7,}$/.test(username);
    if (!isUsernameValid) {
      setErrorMessage("Username must start with alphabet.Atlest 8 charachters")

    }
    else {
      setErrorMessage("")
    }

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      setErrorMessage("Please Enter valid Email")
    }
    else {
      setErrorMessage("")
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    const isTextValid = /^[A-Za-z\s]+$/.test(firstName);

    if (!isTextValid) {
      setErrorMessage("Only Alphabets and spaces")
    }
    else {
      setErrorMessage("")
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    const isTextValid = /^[A-Za-z\s]+$/.test(lastName);

    if (!isTextValid) {
      setErrorMessage("Only Alphabets and spaces")
    }
    else {
      setErrorMessage("")
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/.test(password);
    if (!isPasswordValid) {
      setErrorMessage("Password Atleast 8 charachters and must contain a alphabet, number and special charachter")
    }
    else {
      setErrorMessage("")
    }

  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    // const doPasswordsMatch = password == repeatPassword;
    if (e.target.value === password) {

      setErrorMessage("")
    }
    else {
      setErrorMessage("Password dont match")
    }
  };


  return (
    <>
    <Navbar />
    <Wrapper>



      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>


      <div className="Holder">
        {LoginPage ? (
          <div className="SignInWrap">
            <p className="TitleText">Sign in</p>


            {/* <div className="AdminText" onClick={handleClick}>Admin</div>
            <div className="ToggleHolder">
              <motion.div 
            //  initial={{ right: 0 }}
            //  animate={ToggleBoolean ? { right: 0 } : { left: 0}}
               >

              </motion.div>
              
            </div> */}
            <div className="toggleHolder">
              <div className="TextHolder">

                {ToggleBoolean && "Admin"}
                {!ToggleBoolean && "User"}
              </div>
              <div className="togglebutton" onClick={handleClick} style={{ backgroundColor: ToggleBoolean ? " #a6705d" : "rgba(166, 112, 93, 0.25)" }}>
                <motion.div className="toggle"
                  initial={{ right: 0, backgroundClip: "red" }}
                  animate={ToggleBoolean ? { right: 0, backgroundClip: "red" } : { left: 0, backgroundClip: "pink" }}
                ></motion.div>
              </div>
            </div>

            <input
              type="text"
              placeholder="Username"
              className="InputField"
              value={username}
              onChange={handleUsernameChange}
            />
            <div className="PasswordHolder">
              <input
                type={!PasswordVisibility ? 'text' : 'password'}
                placeholder="Password"
                className="InputField3"
                value={password}
                onChange={handlePasswordChange}
              />

              {PasswordVisibility ?
                <VisibilityOffIcon className="EyeIcon" onClick={EyeClicked} />
                :
                <RemoveRedEyeIcon className="EyeIcon" onClick={EyeClicked} />}
            </div>
            <div>
              <p className="promptText">
                Not Registered ?
                <span className="promptSpan" onClick={GetRegisteredClicked}>
                  {" "}
                  Get Registered
                </span>
              </p>
            </div>

            {/* <Link to={!ToggleBoolean ? "/UserHomePage" : "/AdminHomePage"}> */}
            <Button variant="outlined" className="LoginButton" onClick={async () => {
              setOpen(true);
              const user = await loginUser(username, password);
              console.log(user)
              if (user.token) {
                setOpen(false);
                console.log("Here")
                localStorage.setItem('userName', user.userName);
                localStorage.setItem('userVerification', user.verified);
                //handleLogin();
                navigate('/UserHomePage');
              }
            }}>
              Proceed
            </Button>
            {/* </Link> */}

          </div>
        ) : (
          <div className="SignUpWrap">
            <p className="TitleText">Sign Up</p>
            <p className="ErrorMessage">{ErrorMessage}</p>
            <div className="InputHolder">
              <input
                type="text"
                placeholder="Username"
                className="InputField"
                value={username}
                onChange={handleUsernameChange}
              />
              <input type="text" placeholder="Email" className="InputField"
                value={email}
                onChange={handleEmailChange} />
            </div>

            <div className="InputHolder">
              <input
                type="text"
                placeholder="First Name"
                className="InputField"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="InputField"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>

            <div className="InputHolder">
              <div className="PasswordHolder">
                <input
                  type={!SignUpPasswordVisibility ? 'text' : 'password'}
                  placeholder="Password"
                  className="InputField3"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {SignUpPasswordVisibility ?
                  <VisibilityOffIcon className="EyeIcon" onClick={SignUpEyeClicked} />
                  :
                  <RemoveRedEyeIcon className="EyeIcon" onClick={SignUpEyeClicked} />}
              </div>
              <div className="PasswordHolder">
                <input
                  type={!SignUpRepeatPasswordVisibility ? 'text' : 'password'}
                  placeholder="Repeat Password"
                  className="InputField3"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                />
                {SignUpRepeatPasswordVisibility ?
                  <VisibilityOffIcon className="EyeIcon" onClick={RepeatEyeClicked} />
                  :
                  <RemoveRedEyeIcon className="EyeIcon" onClick={RepeatEyeClicked} />}
              </div>
            </div>

            <div className="AlternativeOption">
              <div className="OptionHolder">
                <FacebookOutlinedIcon className="OptionIcon" />
                <div className="OptionText">Continue with facebook</div>
              </div>

              <div className="OptionHolder2">
                <GoogleIcon className="OptionIcon2" />
                <div className="OptionText2">Continue with google</div>
              </div>
            </div>

            <div>
              <p className="promptText">
                Already Registered ?
                <span className="promptSpan" onClick={GetRegisteredClicked}>
                  {" "}
                  Login In
                </span>
              </p>
            </div>

            <Button variant="outlined" className="LoginButton"
              onClick={async () => {
                setOpen(true);
                const user = await signupUser(email, password, username);
                if (user.error) {
                  alert('Sign-Up Failed: ' + user.error);
                } else {
                  setOpen(false);
                  setLoginPage(true);
                }
              }}
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: #eeeeee;
  font-family: "Century Gothic", sans-serif;
  padding-bottom: 10%;

  .PasswordHolder{
    position:relative;
    width: 45%;
    height: 55px;
    display:flex;
    justify-content:center;
    margin-top:5%;
  }
  .EyeIcon{
    position:absolute;
    right:3%;
    top:25%;
    font-size:30px;
  }

  .Holder {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2.5%;
  }
  .ErrorMessage{
    font-size:18px;
    font-weight:1000;
    color:red;
  }
  .TextHolder{
    text-align:center;
}
  
  .toggleHolder{
    display:flex;
    flex-direction:column;
  }
  .togglebutton{
    background-color:black;
    width:50px;
    height:21px;
    border-radius:15px;
    padding:1%;
    margin-left:2%;
    position:relative;
  }
   .toggle{
    background-color:white;
    height:21px;
    width:20px;
    border-radius:10px;
    position:absolute;
    top:px;
   }
  .ImageHolder {
    width: 40%;
    height: 100%;
    background-color: black;
  }
  .SignInWrap {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5%;
  }
  .InputHolder {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }
  .SignUpWrap {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5%;
  }
  .TitleText {
    font-size: 50px;
    font-weight: 1000;
    text-align: center;
  }
  .InputField {
    height: 55px;
    width: 45%;
    border-radius: 5px;
    padding-left: 2%;
    outline: none;
    border: none;
    background-color: rgb(0, 0, 0, 0.1);
    font-size: 15px;
    margin-top: 5%;
  }
  .InputField3 {
    height: 55px;
    width: 100%;
    border-radius: 5px;
    padding-left: 2%;
    outline: none;
    border: none;
    background-color: rgb(0, 0, 0, 0.1);
    font-size: 15px;
  }
  .LoginButton {
    height: 50px;
    width: 200px;
    margin-top: 2.5%;
    background-color: #a6705d;
    &:hover {
      background-color: black;
      border: none;
      outline: none;
    }
    color: white;
  }
  .promptText {
    margin-top: 10%;
    font-weight: 100;
    font-size: 20px;
  }
  .promptSpan {
    color: #a6705d;
    font-weight: 1000;
  }
  .promptSpan .hover {
    cursor: pointer;
  }
  .AlternativeOption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 65%;
    margin-top: 5%;
  }
  .OptionHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #1778f2;
    border-radius: 30px;
    align-items: center;
    padding: 2.5%;
    width: 50%;
    margin: 1%;
  }
  .OptionHolder2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 30px;
    align-items: center;
    padding: 2.5%;
    width: 50%;
    margin: 1%;
  }
  .OptionText {
    color: white;
    font-weight: 1000;
    letter-spacing: 1px;
  }
  .OptionIcon {
    color: white;
  }
  .OptionIcon2 {
  }
  .OptionText2 {
    font-weight: 1000;
    letter-spacing: 1px;
  }

  
  .UserText{
        font-size:14px;
        padding-left:2px;
        font-weight:1000;
  }
  .AdminText{
    font-size:14px;
    font-weight:1000;
    padding-right:2px;
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    .SignUpWrap {
      width: 90%;
      padding: 5%;
    }
    .PasswordHolder{
      width: 100%;
     
    }
    .InputHolder {
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .InputField {
      width: 100%;
      padding-left: 2.5%;
    }
    .InputField3 {
      width: 100%;
      padding-left: 2.5%;
    }
    .OptionHolder {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .OptionHolder2 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .AlternativeOption {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
      margin-top: 5%;
    }
    .SignInWrap {
      width: 90%;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    margin-top: 80px;
    .AlternativeOption {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
      margin-top: 5%;
    }
    .SignInWrap {
      width: 70%;
    }
    .OptionHolder {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
    .OptionHolder2 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 280px;
      height: 60px;
    }
  }
`;
export default LoginPage;
