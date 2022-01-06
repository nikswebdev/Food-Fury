import classes from './MenuLabel.module.css';

const MenuLabel = (props)=>{
    return(
        <div className={classes.label__container}>
            <p className={`${props.labelActive ? classes.label__active : classes.label}`}>{props.children}</p>
        </div>
    );
}

export default MenuLabel;