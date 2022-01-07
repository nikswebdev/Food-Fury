import classes from './MenuSection.module.css';
import { Fragment } from 'react';
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuCard from '../MenuCard/MenuCard';

const MenuSection = ()=>{
    return(
        <Fragment>
            <MenuHeader/>
            <MenuCard/>
        </Fragment>
    );
}
export default MenuSection;
