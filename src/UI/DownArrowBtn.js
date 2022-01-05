import DownArrow from '../global/assets/DownArrow';
import classes from './DownArrowBtn.module.css';

const DownArrowBtn = ()=>{
    return(
        <button className={classes['down-arrow-btn']}>
            <DownArrow/>
        </button>
    )
}

export default DownArrowBtn;