import BtnContainer from '../Nav/BtnContainer/BtnContainer';
import BtnCounter from '../UI/BtnCounter';
import classes from './CartCheckout.module.css';

const CartCheckout = () => {
  return (
    <div className={classes.cart__checkout}>
      <div className={classes['cart__checkout--header']}>
        <p>Your cart from</p>
        <h2>Red Robin Gourmet Burger and Brews</h2>
      </div>

      <BtnCounter>Checkout $21.09</BtnCounter>
    </div>
  );
};

export default CartCheckout;
