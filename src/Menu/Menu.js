import ListIcon from '../global/assets/ListIcon';
import ScrollContainer from '../UI/ScrollContainer';
import classes from './Menu.module.css';
import MenuLabel from './MenuLabel';
import MenuLabels from './MenuLabels';
import MenuType from './MenuType';

const Menu = () => {
  return (
    <div className={classes.menu}>
      <MenuType type={'Full Menu'} timeOpen={'11:00am'} timeClose={'9:40pm'} />
      <div className={classes.menu__labels}>
        <ListIcon />
        <MenuLabels />
      </div>
    </div>
  );
};

export default Menu;
