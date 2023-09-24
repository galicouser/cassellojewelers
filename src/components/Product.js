import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <Link to={`/products/${id}`} className='link'>
        <div className='container'>
          <img src={image[0]} alt={name} className='image' />
        </div>
        <footer>
          <div className='name-holder'>
            <h5>{name}</h5>
          </div>
          <div className='price-holder'>
            <p>{formatPrice(price)}</p>
          </div>
        </footer>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.article`
height: 550px;
background-color:black;

  &:hover{
    -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
    transition: 0.5s ease-in box-shadow;
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    
  }
  .image {
    width: 100%;
    height:340px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color:none;
  }
  .link {
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    } */
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
  }

  .name-holder{
    width: 100%;
    height: 30%;
    display: grid;
    justify-content: center;
    padding: 0.2rem;
    text-align: center;
  }

  .price-holder{
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: grid;
    justify-content: center;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 100;
    font-size:18px;
    color:white;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  @media (max-width: 767px) {
   height:550px;
  }


  @media (min-width: 800px) and (max-width: 950px) {
    height:525px;
  }
`
export default Product
