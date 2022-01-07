import Menu from '../Menu';
import classes from './MenuHeader.module.css';

const MenuHeader = ()=>{
    return(
        <div className= {classes['menu-header']}>
            <h2>Popular Items</h2>
            <p>The most commonly ordered items and dishes from this store</p>
        </div>
    );
}

export default MenuHeader;