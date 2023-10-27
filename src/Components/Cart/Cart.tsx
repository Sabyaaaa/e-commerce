import React, { useContext } from 'react'
import useCart from '../../hooks/useCart'
import { useState } from 'react'
import CartLineItem from './CartLineItem'
import Navbar from '../Navbar/Navbar'
import "./cart.css"
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate=useNavigate();
  const {isLoggedIn}=useContext(AuthContext)
  const[confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}= useCart()

  const onSubmitOrder = () => {
    if(!isLoggedIn){
      navigate('/login');
    }else{
      navigate('/order');
    }
    dispatch({ type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  sessionStorage.setItem("TotalItem", JSON.stringify(totalItems));
  sessionStorage.setItem("TotalPrice", JSON.stringify(totalPrice));
  sessionStorage.setItem("Cart", JSON.stringify(cart));


  const pageContent = confirm?
    <h2>Thankyou for your order</h2>
    :<>
      <h2 className='offscreen'>Cart</h2>
      <ul className="cart">
        {cart.map(item => {
            return(
              <CartLineItem
                key={item.id}
                item={item}
                dispatch={dispatch}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
            )
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button className="cart__submit" disabled={!totalItems}
        onClick={onSubmitOrder}>
          Place Order
        </button>
      </div>
    </>
  

  const content = (
    <main className="main main--cart">
      <Navbar onGenderChange={onGenderChange}/>
      {pageContent}
    </main>
  )
  return content
}

export default Cart

function onGenderChange(gender: string): void {
  throw new Error('Function not implemented.')
}
