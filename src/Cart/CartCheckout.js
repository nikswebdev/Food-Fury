import { useContext } from 'react/cjs/react.development';
import BtnContainer from '../Nav/BtnContainer/BtnContainer';
import CartContext from '../store/store-menu/cart-context';
import BtnCounter from '../UI/BtnCounter';
import classes from './CartCheckout.module.css';
import CartItem from './CartItem';

const CartCheckout = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items)



  return (
    <div className={classes.cart__checkout}>
      <div className={classes['cart__checkout--header']}>
        <p className={classes['cart__checkout--text']}>Your cart from</p>
        <h2>Red Robin Gourmet Burger and Brews</h2>
      </div>

      <BtnCounter>
        Checkout <span>${cartCtx.totalCost}</span>
      </BtnCounter>

      <h2 className={classes['cart__checkout--header--text']}>This is a delivery order</h2>

      <p className={classes['cart__checkout--message']}>
        Sit back, relax and a Food Fury delivery driver will take care of the annoying stuff for you!
      </p>
      {cartCtx.items.map(item =>{
          return <CartItem key = {item.id} name = {item.name} price= {item.price} quantity = {item.quantity}/>
      })}
      
      
    </div>
  );
};

export default CartCheckout;
