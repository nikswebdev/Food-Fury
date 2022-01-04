import classes from './FoodOption.module.css';

const FoodOption = (props) => {
  return (
    <div className={classes.food__option}>
      {props.children}
      <div className={classes[`food__option--name`]}>{props.name}</div>
    </div>
  );
};

export default FoodOption;
