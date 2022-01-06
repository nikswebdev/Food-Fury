import classes from './Feedback.module.css';
import LogoIcon from '../global/assets/LogoIcon';

const Feedback = (props) => {

  const stars = [];
  const setStars = ()=>{
    for(let i = 0; i < props.stars; i++){
      stars.push(1);
    }
  }

  setStars();
  

  return (
    <div className={classes.feedback}>
      <div className={classes.feedback__name}>{props.name}</div>
      <div className={classes.feedback__details}>
        <div className={classes.feedback__stars}> {stars.map(star => {
          return <div className={classes.feedback__star}>&#9733;</div>
          })}</div>
        <span>&bull;</span>
        <div className={classes.feedback__date}>{props.date}</div>
        <div className={classes.feedback__device}>Reviewed on  &nbsp;<LogoIcon /></div>
      </div>
      <div className={classes.feedback__comment}>{props.comment}</div>
    </div>
  );
};

export default Feedback;
