import classes from './Logo.module.css';
import LogoIcon from './LogoIcon';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <LogoIcon />
      FOOD <span>Fury</span>
    </div>
  );
};

export default Logo;
