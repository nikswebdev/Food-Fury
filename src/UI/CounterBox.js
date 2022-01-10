import AddBtn from './AddBtn';
import classes from './CounterBox.module.css';
import RemoveBtn from './RemoveBtn';
import BtnMain from './BtnMain';

const CounterBox = () => {
  return (
    <form className={classes['counter-box']}>
      <div className= {classes['counter-box__change']}>
        <RemoveBtn />
        <input type='number' min='1' defaultValue={1}/>
        <AddBtn />
      </div>
      <BtnMain colorRed = {true}>Add to Cart - $13.97</BtnMain>
    </form>
  );
};

export default CounterBox;
