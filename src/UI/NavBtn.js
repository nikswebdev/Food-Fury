import classes from './NavBtn.module.css';

const NavBtn = (props) => {
  return <button className={`${classes.btn__nav} ${props.isActive && classes.btn__active}`}>{props.children}</button>;
};

export default NavBtn;
