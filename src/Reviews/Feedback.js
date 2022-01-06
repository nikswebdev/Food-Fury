import classes from './Feedback.module.css';
import LogoIcon from '../global/assets/LogoIcon';

const Feedback = (props) => {
  return (
    <div className={classes.feedback}>
      <div className={classes.feedback__name}>{props.name}</div>
      <div className={classes.feedback__details}>
        <div className={classes.feedback__stars}> &#9733; &#9733; &#9733; &#9733;</div>
        <span>&bull;</span>
        <div className={classes.feedback__date}>12/1/21</div>
        <div className={classes.feedback__device}>Reviewed on  &nbsp;<LogoIcon /></div>
      </div>
      <div className={classes.feedback__comment}>Great service and food!</div>
    </div>
  );
};

export default Feedback;
