import classes from './RemoveBtn.module.css';
import RemoveIcon from './RemoveIcon';

const RemoveBtn = (props) => {
  return (
    <div onClick={props.onclick} className={`${classes.remove__btn} ${props.disable && classes.btn__disable}`}>
      <RemoveIcon />
    </div>
  );
};

export default RemoveBtn;