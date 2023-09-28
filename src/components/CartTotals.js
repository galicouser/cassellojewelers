import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { checkout } from '../API/checkoutAPI'
const CartTotals = () => {
  const { total_amount, shipping_fee, total_items, cart } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()
  const signedInUser = localStorage.getItem("userName");
  const navigate = useNavigate();

  return (
    <Wrapper>


      {signedInUser &&
        <div>
          <article>
            <h5>
              subtotal :<span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              shipping fee :<span>{formatPrice(shipping_fee)}</span>
            </p>
            <hr />
            <h4>
              order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
          </article>
          {myUser ? (
            <Link to='/checkout' className='btn'>
              proceed to checkout
            </Link>
          ) : (
            <button onClick={async () => {
              const body = await checkout("Test", cart);
              window.location.href = body;
            }} className='btn'>
              Checkout
            </button>
          )}
        </div>
      }


      {!signedInUser &&
        <div>
          <article>
            <h5>
              subtotal :<span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              shipping fee :<span>{formatPrice(shipping_fee)}</span>
            </p>
            <hr />
            <h4>
              order total :<span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
          </article>
          {myUser ? (
            <Link to='/checkout' className='btn'>
              proceed to checkout
            </Link>
          ) : (
            <button onClick={() => {
              navigate("/LoginPage")
            }} className='btn'>
              login
            </button>
          )}
        </div>
      }



    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;

    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
`

export default CartTotals
