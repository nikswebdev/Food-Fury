import classes from './ScrollContainer.module.css';

const ScrollContainer = (props) => {
  return (
    <div
      className={`${classes['scroll-container']} 
      ${props.borderBottom && classes['scroll-container__border-bottom']} ${props.noPadding && classes.no__padding}`}>
      {props.children}
    </div>
  );
};

export default ScrollContainer;
