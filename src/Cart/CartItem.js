import TrashBtn from '../UI/TrashBtn';
import classes from './CartItem.module.css';

const CartItem = () => {
  return (
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

      <div className={classes['cart__checkout--item--trash--container']}><TrashBtn/></div>
    </div>
  );
};

export default CartItem;
