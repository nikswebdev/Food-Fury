import classes from './NavOptions.module.css';
import HamburgerIconWraapper from './Hamburger/HamburgerIconWrapper';
import BtnContainer from './BtnContainer/BtnContainer';
import DeliverySettings from './DeliverySettings/DeliverySettings';

const NavOptions = () => {
  return (
    <div className={classes.nav__options}>
      <HamburgerIconWraapper />
      <BtnContainer />
      <DeliverySettings>
        <option>{'ASAP'}</option>
      </DeliverySettings>
      <div className={classes['nav__Options--text--small']}>to</div>
      <DeliverySettings>
        <option>{'99163'}</option>
      </DeliverySettings>
    </div>
  );
};

export default NavOptions;
