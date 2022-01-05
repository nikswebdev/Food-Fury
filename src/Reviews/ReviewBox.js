import classes from './ReviewBox.module.css';
import HeaderMedium from '../UI/HeaderMedium';
import Stars from './Stars/Stars';
import Feedback from './Feedback';

const ReviewBox = ()=>{
    return (
        <div className={classes['review-box']}>
          <HeaderMedium>What people are saying</HeaderMedium>
          <Stars/>
          <Feedback/>
        </div>
      );
}

export default ReviewBox;