import classes from './Nav.module.css';
import Logo from '../global/assets/Logo';
import NavOptions from './NavOptions';
import NavSearch from './NavSearch';


const Nav = () => {
  return (
    <nav className={classes.nav}>
      <NavOptions/>
      <Logo/>
      <NavSearch/>
    </nav>
  );
};

export default Nav;
