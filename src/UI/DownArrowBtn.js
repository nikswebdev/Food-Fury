import DownArrow from '../global/assets/DownArrow';
import classes from './DownArrowBtn.module.css';

const DownArrowBtn = (props)=>{
    return(
        <button className={`${classes['down-arrow-btn']} ${props.colorGrey && classes['color__grey--down']}`}>
            <DownArrow/>
        </button>
    )
}

export default DownArrowBtn;