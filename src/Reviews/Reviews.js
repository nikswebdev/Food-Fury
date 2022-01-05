import Feedback from './Feedback';
import classes from './Reviews.module.css';
import Stars
 from './Stars/Stars';
const Reviews = () => {
  return (
    <div className={classes.reviews}>
      <div className={classes.reviews__header}>
        <h2>What people are saying</h2>
      </div>
      <Stars/>
      <Feedback/>
    </div>
  );
};

export default Reviews;
