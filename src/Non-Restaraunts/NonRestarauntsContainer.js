import AlcoholIcon from '../global/assets/AlcoholIcon';
import ConvenienceIcon from '../global/assets/ConvenienceIcon';
import GroceryIcon from '../global/assets/GroceryIcon';
import OffersIcon from '../global/assets/OffersIcon';
import ShippingIcon from '../global/assets/Shipping';
import NonRestaraunts from '../UI/NonRestaraunts';
import classes from './NonRestarauntsContainer.module.css';

const NonRestarauntsContainer = ()=>{
    return(
        <div className={classes['non-restaurants']}>
            <NonRestaraunts name = {'Convenience'}><ConvenienceIcon/></NonRestaraunts>
            <NonRestaraunts name = {'Grocery'}><GroceryIcon/></NonRestaraunts>
            <NonRestaraunts name = {'Alcohol'}><AlcoholIcon/></NonRestaraunts>
            <NonRestaraunts name = {'Offers'}><OffersIcon/></NonRestaraunts>
            <NonRestaraunts name = {'Shipping'}><ShippingIcon/></NonRestaraunts>
        </div>
    );
}

export default NonRestarauntsContainer;