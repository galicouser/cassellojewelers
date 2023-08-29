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
           Welcome to [Your Store Name], nestled in the heart of Philadelphia. We pride ourselves on being more than just a diamond company. Our expertise lies in crafting bespoke diamond jewelry, uniquely tailored to resonate with your personal story. Whether it's an engagement ring, a timeless necklace, or a pair of stunning earrings, we bring your vision to life with unmatched precision and artistry.
          Why Choose [Your Store Name]
                Custom Creations: Our skilled artisans understand the sentiment behind every piece. With a keen eye for detail, we transform raw designs into tangible masterpieces.
                Affordable Luxury: While diamonds represent luxury, we believe they shouldn't be unattainable. At [Your Store Name], elegance meets affordability. Experience the joy of donning exquisite jewelry without stretching your budget.

Watch & Jewelry Repairs: Time takes its toll on even the finest of jewelry and watches. Our repair services ensure your cherished pieces stand the test of time, looking as pristine as the day you first wore them.

Local Roots, Global Standards: As a Philadelphia-based company, we blend the warmth of local craftsmanship with international quality standards. Every diamond that graces our store has been ethically sourced and meticulously inspected for perfection.

Client-Centric Approach: Your satisfaction fuels our passion. From the moment you step into our boutique to the day you flaunt your custom piece, we're with you at every step, ensuring a seamless and memorable experience.
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

font-family: "Century Gothic", sans-serif;
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
  color:black;
  // background: url("https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297_1280.jpg");
  // background-size: cover;
  // background-position: center;
  // background-clip: text;
  // -webkit-background-clip: text; /* Corrected prefix */
  // color: transparent;
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
