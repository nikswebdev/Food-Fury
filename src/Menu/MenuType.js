import classes from './MenuType.module.css';

const MenuType = (props)=>{
    return(
        <div className={classes['menu-type']}>
            <h3 className={classes['menu-type__header']}>{props.type}</h3>
            <p className={classes['menu-type__time']}>{props.timeOpen} - {props.timeClose}</p>
        </div>
    );
}

export default MenuType;