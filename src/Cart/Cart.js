import classes from './Cart.module.css';
import CartIcon from './CartIcon';

const Cart = () => {
  return (
    <div className={classes.cart}>
      <CartIcon />
      <div className={classes.cart__total}>0</div>
    </div>
  );
};

export default Cart;
