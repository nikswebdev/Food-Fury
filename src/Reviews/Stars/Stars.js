
import StarFull from './StarFull';
import StarHalf from './StarHalf';
import classes from './Stars.module.css';

const Stars = () => {
  return (
    <div className={classes.stars}>
      <p className={classes.rating}>4.5</p>
      <div className={classes.star__container}>
       <StarFull/>
       <StarFull/>
       <StarFull/>
       <StarFull/>
       <StarHalf/>
      </div>
      <div className={classes.rating__figures}>2,700+ ratings &bull; 1 public review</div>
    </div>
  );
};

export default Stars;
