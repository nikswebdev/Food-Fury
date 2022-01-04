import classes from './BtnContainer.module.css';
import NavBtn from '../../UI/NavBtn';

const BtnContainer = () => {

  return (
    <div className={classes.nav__buttons}>
      <NavBtn isActive = {true}>Delivery</NavBtn>
      <NavBtn isActive = {false}>Pickup</NavBtn>
    </div>
  );
};

export default BtnContainer;
