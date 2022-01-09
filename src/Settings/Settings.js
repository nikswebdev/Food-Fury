import BtnMain from '../UI/BtnMain';
import classes from './Settings.module.css';
import DownArrowBtn from '../UI/DownArrowBtn';

const Settings = () => {
  return (
    <div className={classes.settings}>
      <BtnMain activeBlack={true}>Pickup</BtnMain>
      <BtnMain colorGrey={true}>
        Over 4.5 &#9733;
        <DownArrowBtn colorGrey = {true}/>
      </BtnMain>
      <BtnMain colorGrey={true}>Under 30 min</BtnMain>
      <BtnMain colorGrey={true}>
        Price
        <DownArrowBtn colorGrey = {true}/>
      </BtnMain>
    </div>
  );
};

export default Settings;
