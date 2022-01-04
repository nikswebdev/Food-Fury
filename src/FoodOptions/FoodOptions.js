import AsianIcon from '../global/assets/FoodOptions/AsianIcon';
import BreakfastIcon from '../global/assets/FoodOptions/BreakfastIcon';
import ChickenIcon from '../global/assets/FoodOptions/ChickenIcon';
import ChineseIcon from '../global/assets/FoodOptions/ChineseIcon';
import CoffeeIcon from '../global/assets/FoodOptions/CoffeeIcon';
import DessertIcon from '../global/assets/FoodOptions/DessertIcon';
import FastFoodIcon from '../global/assets/FoodOptions/FastFoodIcon';
import HamburgerFoodIcon from '../global/assets/FoodOptions/HamburgerFoodIcon';
import HealthyIcon from '../global/assets/FoodOptions/HealthyIcon';
import ItalianIcon from '../global/assets/FoodOptions/ItalianIcon';
import JapaneseIcon from '../global/assets/FoodOptions/JapaneseIcon';
import MexicanIcon from '../global/assets/FoodOptions/MexcanIcon';
import PizzaIcon from '../global/assets/FoodOptions/PizzaIcon';
import SaladIcon from '../global/assets/FoodOptions/SaladIcon';
import SandwichIcon from '../global/assets/FoodOptions/SandwichIcon';
import SmoothieIcon from '../global/assets/FoodOptions/SmoothieIcon';
import FoodOption from './FoodOption';
import classes from './FoodOptions.module.css';

const FoodOptions = ()=>{
    return(
        <div className={classes.food__options}>
            <FoodOption name = {'Fast Food'}><FastFoodIcon/></FoodOption>
            <FoodOption name = {'Mexican'}><MexicanIcon/></FoodOption>
            <FoodOption name = {'Chicken'}><ChickenIcon/></FoodOption>
            <FoodOption name = {'Burgers'}><HamburgerFoodIcon/></FoodOption>
            <FoodOption name = {'Dessert'}><DessertIcon/></FoodOption>
            <FoodOption name = {'Breakfast'}><BreakfastIcon/></FoodOption>
            <FoodOption name = {'Sandwiches'}><SandwichIcon/></FoodOption>
            <FoodOption name = {'Healthy'}><HealthyIcon/></FoodOption>
            <FoodOption name = {'Asian'}><AsianIcon/></FoodOption>
            <FoodOption name = {'Salad'}><SaladIcon/></FoodOption>
            <FoodOption name = {'Chinese'}><ChineseIcon/></FoodOption>
            <FoodOption name = {'Pizza'}><PizzaIcon/></FoodOption>
            <FoodOption name = {'Coffee'}><CoffeeIcon/></FoodOption>
            <FoodOption name = {'Japanese'}><JapaneseIcon/></FoodOption>
            <FoodOption name = {'Italian'}><ItalianIcon/></FoodOption>
            <FoodOption name = {'Smoothie'}><SmoothieIcon/></FoodOption>
        </div>
    );
}

export default FoodOptions;