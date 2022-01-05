import ReviewBox from './ReviewBox';
import classes from './Reviews.module.css';
import SeeAllReviews from './SeeAllReviews';

const Reviews = () => {
  return (
    <div className={classes.reviews}>
      <ReviewBox />
      <SeeAllReviews/>
    </div>
  );
};

export default Reviews;
