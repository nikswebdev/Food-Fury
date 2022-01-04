import classes from './NonRestaraunts.module.css';

const NonRestaraunts = (props) => {
  return (
    <div className={classes['non-restaurants__container']}>
      <div className={classes['non-restaurants__svg--container']}>{props.children}</div>
      {props.name}
    </div>
  );
};

export default NonRestaraunts;
