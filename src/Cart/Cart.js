import { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../store/store-menu/cart-context';
import classes from './Cart.module.css';
import CartIcon from './CartIcon';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const displayAmount = ()=>{
    cartCtx.getTotalAmount();
    return cartCtx.totalAmount;
  }  

  return (
    <div className={classes.cart}>
      <CartIcon />
      <div className={classes.cart__total}>{displayAmount()}</div>
    </div>
  );
};

export default Cart;
