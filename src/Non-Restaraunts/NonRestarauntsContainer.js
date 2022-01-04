import AlcoholIcon from '../global/assets/NonRestaraunts/AlcoholIcon';
import ConvenienceIcon from '../global/assets/NonRestaraunts/ConvenienceIcon';
import GroceryIcon from '../global/assets/NonRestaraunts/GroceryIcon';
import OffersIcon from '../global/assets/NonRestaraunts/OffersIcon';
import ShippingIcon from '../global/assets/NonRestaraunts/Shipping';
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