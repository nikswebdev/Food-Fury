import classes from './HeaderMedium.module.css';

const HeaderMedium = (props) => {
  return (
    <div className={classes.header__medium}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default HeaderMedium;
