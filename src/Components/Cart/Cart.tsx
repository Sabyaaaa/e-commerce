

import React, { useContext, useEffect, useState } from "react";

import useCart from "../../hooks/useCart";

import CartLineItem from "./CartLineItem";

import Navbar from "../Navbar/Navbar";

import { AuthContext } from "../AuthProvider/AuthProvider";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AuthContext);

  const [confirm, setConfirm] = useState(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart) {
      dispatch({
        type: REDUCER_ACTIONS.INITIALIZE_CART,

        payload: JSON.parse(storedCart),
      });
    }
  }, [dispatch, REDUCER_ACTIONS]);

  const onSubmitOrder = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/order");
    }

    dispatch({ type: REDUCER_ACTIONS.SUBMIT });

    setConfirm(true);
  };

  useEffect(() => {
    // Store cart data in sessionStorage

    sessionStorage.setItem("Cart", JSON.stringify(cart));
    sessionStorage.setItem("TotalPrice",JSON.stringify(totalPrice));
  }, [cart]);

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>

      <ul className="cart">
        {cart.map((item) => (
          <CartLineItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>

      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>

        <p>Total Price: {totalPrice}</p>

        <button
          className="cart__submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );

  const content = (
    <main className="main main--cart">
      <Navbar onGenderChange={onGenderChange} />

      {pageContent}
    </main>
  );

  return content;
};

export default Cart;

function onGenderChange(gender: string): void {
  throw new Error("Function not implemented.");
}
