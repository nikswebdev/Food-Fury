import classes from './StarFull.module.css';
import StarIconHalf from '../../global/assets/StarIconHalf';

const StarHalf = ()=>{
    return(
        <div className= {classes.star__full}>
            <StarIconHalf/>
        </div>
    );
}

export default StarHalf;