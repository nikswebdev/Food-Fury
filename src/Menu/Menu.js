import ListIcon from '../global/assets/ListIcon';
import classes from './Menu.module.css';
import MenuLabels from './MenuLabels';
import MenuType from './MenuType';

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <MenuType type={'Full Menu'} timeOpen={'11:00am'} timeClose={'9:40pm'} />
      <div className={classes.menu__labels}>
        <ListIcon />
        <MenuLabels labels = {props.labels}/>
      </div>
    </div>
  );
};

export default Menu;
