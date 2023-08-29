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
   Welcome to Cassello Jewellers, where exquisite craftsmanship meets timeless elegance in the heart of a vibrant city. Our passion for creating unique handcrafted jewelry is reflected in every masterpiece we offer.

Nestled in the enchanting backdrop of a city with a rich history of artistry, Cassello Jewellers draws inspiration from its surroundings. Our artisans, with their skilled hands and creative souls, pour their expertise into every piece of jewelry they craft. From delicate necklaces that grace your collarbone to intricate bracelets that wrap around your wrist, we celebrate the diversity of jewelry styles that cater to all tastes and occasions.

What sets us apart is our unwavering commitment to quality. Each gemstone is carefully selected, each metal is meticulously shaped, and each design is thoughtfully brought to life. Our jewelry is not just an accessory; it's an expression of emotions, a symbol of moments, and a reflection of your unique story.

Whether you're seeking a stunning engagement ring that speaks of eternal love, a pair of earrings that add a touch of glamour to your ensemble, or a custom-made piece that embodies your personal journey, Cassello Jewellers has something special for everyone. Our collection features an array of designs, from classic and understated to bold and avant-garde, ensuring that you'll find the perfect piece that resonates with your style.

Step into our world and witness the artistry of jewelry creation unfolding. Join us in celebrating the beauty of handcrafted adornments that transcend trends and become cherished heirlooms. Discover the magic of Cassello Jewellers, where every piece tells a story, and every gem holds a memory, right in the heart of Philadelphia.

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
