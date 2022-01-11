import AddBtn from './AddBtn';
import classes from './CounterBox.module.css';
import RemoveBtn from './RemoveBtn';
import BtnMain from './BtnMain';
import BtnCounter from './BtnCounter';
import { useRef, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import CartContext from '../store/store-menu/cart-context';

const CounterBox = (props) => {
  const [inputValue, setInputValue] = useState(1);
  const cartCtx = useContext(CartContext);

  const decreaseAmount = () => {
    setInputValue((previousValue) => {
      return previousValue - 1;
    });
  };

  const IncreaseAmount = () => {
    setInputValue((previousValue) => {
      return previousValue + 1;
    });
  };

  const submitMealHandler = (event)=>{
    event.preventDefault();
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      quantity: inputValue,
    });
    props.onCloseMenu();
  }

  return (
    <form className={classes['counter-box']} onSubmit={submitMealHandler}>
      <div className={classes['counter-box__change']}>
        {inputValue > 1 ?  <RemoveBtn onclick={decreaseAmount} /> : <RemoveBtn disable = {true} />}

        <input id='food-amount' type='number' min='1' value={inputValue} readOnly />
        <AddBtn onclick={IncreaseAmount} />
      </div>
      <BtnCounter>Add to Cart - $13.97</BtnCounter>
    </form>
  );
};

export default CounterBox;
