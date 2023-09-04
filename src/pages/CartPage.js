import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, Navbar, PageHero } from '../components'
const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <main>
        <Navbar/>
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
      </main>
    )
  }
  return (
    <main>
      <Navbar/>
      <Wrapper className='page'>
        <CartContent></CartContent>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }

  @media (max-width: 944px) {
    margin-top: 50px;
  }
`

export default CartPage
