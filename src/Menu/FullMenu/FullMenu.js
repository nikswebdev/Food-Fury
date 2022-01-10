
import MenuSection from '../MenuSection/MenuSection';
import classes from './FullMenu.module.css';

const FullMenu = (props)=>{
    return(
        <div className={classes['full-menu']}>
            <MenuSection menu = {props.menu} onOpenMenu = {props.onOpenMenu}/>
        </div>
    );
}

export default FullMenu;