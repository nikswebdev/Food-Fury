import classes from './NavSearch.module.css';
import Search from '../UI/Search';
import Cart from '../Cart/Cart';

const NavSearch = () => {
  return (
    <div className={classes.nav__search}>
      <Search />
      <Cart />
    </div>
  );
};

export default NavSearch;
