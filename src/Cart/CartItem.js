import TrashBtn from '../UI/TrashBtn';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const removeItemHandler = ()=>{
    props.onClick(props.name);
  }

  return (
    <div className={classes['cart__checkout--item--container']}>
      <div className={classes['cart__checkout--item--description']}>
        <div className={classes['cart__checkout--item--amount']}>
          <span>{props.quantity}</span>x
        </div>
        <div className={classes['cart__checkout--item--name-cost']}>
          <div className={classes['cart__checkout--item--name']}> {props.name}</div>
          <div className={classes['cart__checkout--item--cost']}>
            $<span>{props.price}</span>
          </div>
        </div>
      </div>

      <div className={classes['cart__checkout--item--trash--container']} onClick={removeItemHandler}><TrashBtn/></div>
    </div>
  );
};

export default CartItem;
