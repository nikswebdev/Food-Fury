import classes from './RemoveBtn.module.css';
import RemoveIcon from './RemoveIcon';

const RemoveBtn = () => {
  return (
    <div className={classes.remove__btn}>
      <RemoveIcon />
    </div>
  );
};

export default RemoveBtn;