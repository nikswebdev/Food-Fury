import classes from './ListIcon.module.css';
import ListIconSVG from './ListIconSVG';

const ListIcon = () => {
  return (
    <div className={classes['list-icon']}>
        <ListIconSVG/>
    </div>
  );
};

export default ListIcon;
