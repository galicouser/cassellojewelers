import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import { Navbar } from '../components'
import heroBcg from "../assets/hero-bcg-4.jpg";
import heroBcg2 from "../assets/hero-bcg-8.jpg";
import Grid from '@mui/material/Grid';
const AboutPage = () => {
  return (
    <main>
      <Navbar/>
     
      <Wrapper>
        
 <Grid container gap={2}>
        <Grid item lg={12}>
          <div className='ImageHolder'>
          <img className='Image' src={heroBcg} alt='nice desk' />
          <p className='TitleText'>Our Story</p>
          <img className='SmallImage' src={heroBcg2} alt='nice desk' />
          </div>
        </Grid>
        <Grid item lg={6.5}>
          <div className='AboutUsTextHolder'>
          <p className='AboutUsText'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
          </div>
        </Grid>
       
      </Grid>

      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
height:100vh;
background-color:#eeeeee;
padding-top:40px;

.ImageHolder{
  width:100%;
  height:40vh;
  position:relative;
}
.SmallImage{
  width:350px;
  height:350px;
  right:10%;
  position:absolute;
  bottom:-200px;
  object-fit:cover;
}
.AboutUsTextHolder{
  padding-left:5%;
}
.AboutUsText{
  font-size:25px;
  font-weight:100;
}
.TitleText{
  font-size:150px;
  font-weight:1000;
  position:absolute;
  top:-90px;
  left:2.5%;
  background: url("https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297_1280.jpg");
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text; /* Corrected prefix */
  color: transparent;
}
.Image{
  width:100%;
  height:100%;
  object-fit:cover;
}
@media (max-width: 767px) {
  
padding-top:80px;
  .TitleText{
    font-size:60px;
    font-weight:1000;
    color:white;
    top:15%;
  }
  .SmallImage{
    display:none;
  }
  .AboutUsText{
    font-size:15px;
    
  }
  .ImageHolder{
    height:40vh;
    width:100%;
  }
  .AboutUsTextHolder{
    padding-left:0%;
    text-align:center;
  }
}

@media (min-width: 800px) and (max-width: 950px) {
  padding-top:17%;
   .ImageHolder{
    height:50vh;
    width:100%;
  }
  .SmallImage{
    width:350px;
    height:350px;
    right:10%;
    position:absolute;
    bottom:-50px;
  }
  .AboutUsTextHolder{
    padding-top:50px;
  }
}
  
`
export default AboutPage
