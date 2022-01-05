import classes from './BtnRight.module.css';
import DownArrowBtn from './DownArrowBtn';

const BtnRight = () => {
  return (
    <div className={classes.btn__right}>
      <DownArrowBtn />
    </div>
  );
};

export default BtnRight;