import { useContext } from 'react/cjs/react.development';
import MenuContext from '../../store/store-menu/menu-context';
import classes from './MenuCard.module.css';

const MenuCard = (props) => {

 const menuCtx = useContext(MenuContext);

 const openMenu = ()=>{
     props.onOpenMenu();
     menuCtx.filterItem(props.name)
 }

  return (
    <div className={classes['menu-card']} onClick={openMenu} >
      <div className={classes['menu-card__description']}>
        <h3 className={classes['menu-card__header']}>{props.name}</h3>
        <p className={classes['menu-card__text']}>
          {props.description.length > 77 ? props.description.substring(0, 77).concat('...') : props.description}
        </p>
        <p className={classes['menu-card__price']}>${props.price}</p>
      </div>
      <div className={classes['menu-card__img']}>
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
};
export default MenuCard;
