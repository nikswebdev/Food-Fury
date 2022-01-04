import classes from './DeliverySettings.module.css';

const DeliverySettings = (props)=>{
    return(
        <select className={classes.delivery__settings}>
            {props.children}
        </select>
    );
}

export default DeliverySettings;