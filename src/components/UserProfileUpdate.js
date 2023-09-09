import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const UserProfileUpdate = () => {
  const [UserProfile, setUserProfile] = useState(
    "https://cdn.pixabay.com/photo/2022/04/13/12/14/man-7130170_1280.jpg"
  );

  const [FirstName,setFirstName] = useState("")
  
  const [LastName,setLastName] = useState("")
  
  const [DateOfBirth,setDateOfBirth] = useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Wrapper>
      <p className="Title">Update Profile</p>
      
      <Grid container gap={2} className="SubGrid">
        <Grid item lg={3}>
          <div>
            <p className="PromptText">
              First Name
            </p>

            <input
              className={"InputFieldGeneral"}
              type="text"
               value={FirstName}
             onChange={handleFirstNameChange}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container gap={2} className="SubGrid">
        <Grid item lg={3}>
        <div>
            <p className="PromptText">
              Last Name
            </p>

            <input
              className={"InputFieldGeneral"}
              type="text"
               value={LastName}
               onChange={handleLastNameChange}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container gap={2} className="SubGrid">
        <Grid item lg={3}>
        <div>
            <p className="PromptText">
              Date of Birth
            </p>

            <input
              className={"InputFieldGeneral"}
              type="text"
               value={DateOfBirth}
               onChange={handleDateOfBirthChange}
            />
          </div>
       
        </Grid>
        
      </Grid>

      <Grid container gap={2} className="SubGrid">
        <Grid item lg={3}>

          <Button
          varient="contained"
          className="ColoredButton">
            Save Change
          </Button>
       
        </Grid>
        
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 5%;
  font-family: "Century Gothic", sans-serif;
  height: 100%;
  width:75%;

.MainGrid{
  display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.SubGrid{
  display: flex;
  
    justify-content: center;
    align-content: center;
    align-items: center;
}
  .Button {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 10%;
    margin-bottom: 2%;
    color: grey;
    font-size: 15px;
  }
  .ColoredButton {
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
  .ColoredButton: hover {
    color:black;
  }
  

  .InputFieldGeneral {
    width: 300px;
    height: 45px;
    margin-top: 0;
    border-radius: 5px;
    font-size: 18px;
    outline:none;
    border:none;
    background-color:rgb(0,0,0,0.10);
  }


  .PromptText {
    font-size: 17px;
    font-weight: 400;
    color: grey;
  }
  .PromptTextMain{
    font-size: 17px;
    font-weight: 400;
    color: grey;
  text-align:center;  
  }

  .Icon {
    padding-right: 5%;
  }

  .ImageHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .UserImage {
    height: 200px;
    weight: 200px;
    border-radius: 100px;
    object-fit: cover;
  }
  .Title {
    font-size: 45px;
    font-weight: 100;
    color: #1c1f25;
    margin-left:5%;
  }
  @media (min-width: 800px) and (max-width: 950px) {
    margin-top:15%;
  }
  @media (max-width: 767px) {
    width:100%;
    padding-left: 0%;
    
    padding-bottom: 10%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    align-items:center;
    .MainGrid{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    align-items:center;
    }
    .SubGrid{
      display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    align-items:center;
    }
    .Title {
      margin-left:0px;
    }
  }



  
`;
export default UserProfileUpdate;
