import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import Button from "@mui/material/Button";
const AddToCart = ({ product }) => {
  // add to cart
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors)

  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > 200) {
        tempAmount = 200
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }
  return (
    <Wrapper>
      {/* <div className='colors'>
        <span>colors :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor[0] === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor[0] === color ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div> */}
      <div className='btn-container'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link to='/cart'
          onClick={() => addToCart(id, mainColor[0], amount, product)}>
          <Button variant="outlined" className='Button'>
            Add To Cart
          </Button>
        </Link>


      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .Button{
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 180px;
    color: black;
    border: 4px solid rgb(0, 0, 0, 0.2);
    margin-left:5%;
  }
  .Button:hover {
    background-color: black;
    border: none;
    color: white;
  }

  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
    display:flex;
    align-items:center;
    align-content:center;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
