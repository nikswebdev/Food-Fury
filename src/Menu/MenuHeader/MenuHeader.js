import classes from './MenuHeader.module.css';

const MenuHeader = (props) => {
  return (
    <div className={classes['menu-header']}>
      <h2>{props.section}</h2>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default MenuHeader;
