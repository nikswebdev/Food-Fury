import classes from './AddBtn.module.css';
import AddIcon from './AddIcon';

const AddBtn = (props) => {
  return (
    <div onClick={props.onclick} className={classes.add__btn}>
      <AddIcon />
    </div>
  );
};

export default AddBtn;
