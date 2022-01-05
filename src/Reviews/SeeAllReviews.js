import BtnLeft from '../UI/BtnLeft';
import BtnMain from '../UI/BtnMain';
import BtnRight from '../UI/BtnRight';
import classes from './SeeAllReviews.module.css';

const SearchAllReviews = ()=>{
    return(
        <div className={classes['see-all-reviews']}>
            <BtnMain colorGrey = {true}>See all reviews &rarr;</BtnMain>
            <div className={classes.review__direction}>
                <BtnLeft/>
                <BtnRight/>
            </div>
        </div>
    );
}

export default SearchAllReviews;