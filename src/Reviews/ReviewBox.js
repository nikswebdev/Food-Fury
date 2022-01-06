import classes from './ReviewBox.module.css';
import HeaderMedium from '../UI/HeaderMedium';
import Stars from './Stars/Stars';
import Feedback from './Feedback';
import ScrollContainer from '../UI/ScrollContainer';

const ReviewBox = () => {
  return (
    <div className={classes['review-box']}>
      <HeaderMedium>What people are saying</HeaderMedium>
      <Stars />
      <ScrollContainer noPadding = {true}>
        <Feedback stars = {5}/>
        <Feedback stars = {2}/>
        <Feedback stars = {4}/>
        <Feedback stars = {3}/>
        <Feedback stars = {4}/>
        <Feedback stars = {4}/>
        <Feedback stars = {5}/>
      </ScrollContainer>
    </div>
  );
};

export default ReviewBox;
