import classes from './BtnCounter.module.css';

const BtnCounter = (props)=>{
 return <button className={classes.btn__counter} type = 'submit'>{props.children}</button>
}

export default BtnCounter;