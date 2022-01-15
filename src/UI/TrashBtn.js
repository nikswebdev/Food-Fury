import TrashIcon from '../global/assets/TrashIcon';
import classes from './TrashBtn.module.css';

const TrashBtn = (props) => {
  return (
    <div className= {classes.trash__btn}>
      <TrashIcon />
    </div>
  );
};

export default TrashBtn;
