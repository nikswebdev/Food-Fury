import classes from './AddBtn.module.css';
import AddIcon from './AddIcon';

const AddBtn = () => {
  return (
    <div className={classes.add__btn}>
      <AddIcon />
    </div>
  );
};

export default AddBtn;
