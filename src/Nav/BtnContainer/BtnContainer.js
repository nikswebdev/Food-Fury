import classes from './BtnContainer.module.css';
import BtnMain from '../../UI/BtnMain';

const BtnContainer = () => {

  return (
    <div className={classes.nav__buttons}>
      <BtnMain activeBlack = {true}>Delivery</BtnMain>
      <BtnMain>Pickup</BtnMain>
    </div>
  );
};

export default BtnContainer;
