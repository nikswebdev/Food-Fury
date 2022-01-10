import classes from './MenuSection.module.css';
import { Fragment } from 'react';
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuCard from '../MenuCard/MenuCard';

const MenuSection = (props) => {
  return (
    <Fragment>
      {props.menu.map((item) => {
        return (
          <div key = {`${item.id}__main-container`}>
            <MenuHeader key = {`${item.id}__header`} section={item.name} description = {item.description}/>
            <div key = {`${item.id}__container`} className={classes.menu__section}>
                {item.items.map(foodItem =>{
                    return <MenuCard onOpenMenu = {props.onOpenMenu} key = {foodItem.id} name = {foodItem.name} price = {foodItem.price}
                    description = {foodItem.description} img = {foodItem.img}/>
                })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default MenuSection;
