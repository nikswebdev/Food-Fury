import NavBtn from '../UI/NavBtn';
import classes from './Settings.module.css';
import DownArrow from '../global/assets/DownArrow';
import DownArrowBtn from '../UI/DownArrowBtn';

const Settings = () => {
  return (
    <div className={classes.settings}>
      <NavBtn isActive={true}>Pickup</NavBtn>
      <NavBtn settingsBtn={true}>
        Over 4.5 &#9733;
        <DownArrowBtn />
      </NavBtn>
      <NavBtn settingsBtn={true}>Under 30 min</NavBtn>
      <NavBtn settingsBtn={true}>
        Price
        <DownArrowBtn />
      </NavBtn>
    </div>
  );
};

export default Settings;
