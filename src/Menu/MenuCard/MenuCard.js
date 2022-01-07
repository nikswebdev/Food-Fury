import classes from './MenuCard.module.css';
import BaconCheeseBurger from '../../global/assets/img/burger1.jfif';

const MenuCard = ()=>{
    return(
        <div className={classes['menu-card']}>
            <div className= {classes['menu-card__description']}>
                <h3 className = {classes['menu-card__header']}>Bacon Cheeseburger</h3>
                <p className = {classes['menu-card__text']}>Hardwood-smoked bacon, lettuce, tomatoes, mayo and choice of cheeses</p>
                <p className = {classes['menu-card__price']}>$14.29</p>
            </div>
            <div className= {classes['menu-card__img']}>
                <img src={BaconCheeseBurger}/>
            </div>
        </div>
    );
}
export default MenuCard