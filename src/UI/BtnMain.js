import classes from './BtnMain.module.css';

const BtnMain = (props) => {
  return <button className={`${classes.btn__main} ${props.activeBlack && classes['btn__active--black']} ${props.colorGrey && classes.color__grey} ${props.colorRed && classes.color__red}`} >{props.children}</button>;
};

export default BtnMain;
