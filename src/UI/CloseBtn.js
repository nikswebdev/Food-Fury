
import CloseIcon from '../global/assets/CloseIcon';
import classes from './CloseBtn.module.css';

const CloseBtn = (props)=>{
    return(
        <div className={classes.close__btn}>
            <CloseIcon onCloseMenu = {props.onCloseMenu}/>
        </div>
    );
}

export default CloseBtn;