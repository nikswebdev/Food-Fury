import BtnContainer from '../Nav/BtnContainer/BtnContainer';
import BtnCounter from '../UI/BtnCounter';
import classes from './CartCheckout.module.css';

const CartCheckout = () => {
  return (
    <div className={classes.cart__checkout}>
      <div className={classes['cart__checkout--header']}>
        <p className={classes['cart__checkout--text']}>Your cart from</p>
        <h2>Red Robin Gourmet Burger and Brews</h2>
      </div>

      <BtnCounter>
        Checkout <span>$21.09</span>
      </BtnCounter>

      <h2 className={classes['cart__checkout--header--text']}>This is a delivery order</h2>

      <p className={classes['cart__checkout--message']}>
        {' '}
        Sit back, relax and a Food Fury delivery driver will take care of the annoying stuff for you!
      </p>
      <div className={classes['cart__checkout--item--container']}>
        <div className={classes['cart__checkout--item--description']}>
          <div className={classes['cart__checkout--item--amount']}>
            <span>3</span>x
          </div>
          <div className={classes['cart__checkout--item--name-cost']}>
            <div className={classes['cart__checkout--item--name']}> Pretzel Bites</div>
            <div className={classes['cart__checkout--item--cost']}>
              $<span>21.09</span>
            </div>
          </div>
        </div>
        
        <div className={classes['cart__checkout--item--trash--container']}>trash</div>
      </div>
      
    </div>
  );
};

export default CartCheckout;
