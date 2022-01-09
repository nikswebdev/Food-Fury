import DownArrow from '../global/assets/DownArrow';
import classes from './DownArrowBtn.module.css';

const DownArrowBtn = (props)=>{
    return(
        <div className={`${classes['down-arrow-btn']} ${props.colorGrey && classes['color__grey--down']}`}>
            <DownArrow/>
        </div>
    )
}

export default DownArrowBtn;