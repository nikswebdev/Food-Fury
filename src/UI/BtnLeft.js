import classes from './BtnLeft.module.css';
import DownArrowBtn from './DownArrowBtn';

const BtnLeft = () => {
  return (
    <div className={classes.btn__left}>
      <DownArrowBtn />
    </div>
  );
};

export default BtnLeft;
