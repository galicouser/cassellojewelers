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
      <Navbar />

      <Wrapper>

        <div className='ImageHolder'>
          <img className='Image' src={heroBcg} alt='nice desk' />
          <p className='TitleText'>Our Story</p>
          {/* <img className='SmallImage' src={heroBcg2} alt='nice desk' /> */}
        </div>
        <div className='AboutUsTextHolder'>
          <p className='AboutUsText'>
            Welcome to Cassello Jewellers, where exquisite craftsmanship meets timeless elegance in the heart of a vibrant city. Our passion for creating unique handcrafted jewelry is reflected in every masterpiece we offer.

            Nestled in the enchanting backdrop of a city with a rich history of artistry, Cassello Jewellers draws inspiration from its surroundings. Our artisans, with their skilled hands and creative souls, pour their expertise into every piece of jewelry they craft. From delicate necklaces that grace your collarbone to intricate bracelets that wrap around your wrist, we celebrate the diversity of jewelry styles that cater to all tastes and occasions.

            What sets us apart is our unwavering commitment to quality. Each gemstone is carefully selected, each metal is meticulously shaped, and each design is thoughtfully brought to life. Our jewelry is not just an accessory; it's an expression of emotions, a symbol of moments, and a reflection of your unique story.

            Whether you're seeking a stunning engagement ring that speaks of eternal love, a pair of earrings that add a touch of glamour to your ensemble, or a custom-made piece that embodies your personal journey, Cassello Jewellers has something special for everyone. Our collection features an array of designs, from classic and understated to bold and avant-garde, ensuring that you'll find the perfect piece that resonates with your style.

            Step into our world and witness the artistry of jewelry creation unfolding. Join us in celebrating the beauty of handcrafted adornments that transcend trends and become cherished heirlooms. Discover the magic of Cassello Jewellers, where every piece tells a story, and every gem holds a memory, right in the heart of Philadelphia.

          </p>
        </div>


      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
height:100%;
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
  position: relative;
  padding-left:5%;
  padding-right:5%;
  height: 100%x;
}
.AboutUsText{
  font-size:18px;
  font-weight:100;
  background-color: white;
  padding: 2%;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.TitleText{
  font-size:100px;
  font-weight:1000;
  position:absolute;
  top:50px;
  left:2.5%;
  color:  #222831;
  background-color: rgba(238, 238, 238, 0.5);
  border-radius: 10px;
}
.Image{
  width:100%;
  height:100%;
  object-fit:cover;
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
@media (max-width: 525px) {
height: 1800px;
/* padding-top:80px;
margin-bottom: 500px; */
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
    font-size:18px;
    font-weight:100;
    background-color: white;
    padding: 2%;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 1300px;
  }
  .ImageHolder{
    height:40vh;
    width:100%;
  }
  .AboutUsTextHolder{
    position: relative;
    padding-left:0%;
    padding-right:0%;
    height: 1300px;
    text-align:center;
  }
}

@media (min-width: 430px) and (max-width: 525px) {
  height: 100%;
/* padding-top:80px;
margin-bottom: 500px; */
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
    font-size:18px;
    font-weight:100;
    background-color: white;
    padding: 2%;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
  }
  .ImageHolder{
    height:40vh;
    width:100%;
  }
  .AboutUsTextHolder{
    position: relative;
    padding-left:0%;
    padding-right:0%;
    height: 100%;
    text-align:center;
  }

}


@media (min-width: 525px) and (max-width: 600px) {
  height: 100%;
/* padding-top:80px;
margin-bottom: 500px; */
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
    font-size:18px;
    font-weight:100;
    background-color: white;
    padding: 2%;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
  }
  .ImageHolder{
    height:40vh;
    width:100%;
  }
  .AboutUsTextHolder{
    position: relative;
    padding-left:0%;
    padding-right:0%;
    height: 1300px;
    text-align:center;
  }

}

@media (min-width: 600px) and (max-width: 767px) {
  height: 100%;
/* padding-top:80px;
margin-bottom: 500px; */
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
    font-size:18px;
    font-weight:100;
    background-color: white;
    padding: 2%;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
  }
  .ImageHolder{
    height:40vh;
    width:100%;
  }
  .AboutUsTextHolder{
    position: relative;
    padding-left:0%;
    padding-right:0%;
    height: 900px;
    text-align:center;
  }

}


@media (min-width: 767px) and (max-width: 900px) {
  height: 100%;
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

  .AboutUsText{
    font-size:20px;
  }
}

@media (min-width: 900px){
  height: 100%;
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

  .AboutUsText{
    font-size:20px;
  }
}

`
export default AboutPage