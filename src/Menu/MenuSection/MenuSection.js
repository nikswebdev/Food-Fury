import classes from './MenuSection.module.css';
import { Fragment } from 'react';
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuCard from '../MenuCard/MenuCard';

const MenuSection = () => {
  return (
    <Fragment>
      <MenuHeader />
      <div className= {classes.menu__section}>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
    
      </div>
    </Fragment>
  );
};
export default MenuSection;
