import React, { Fragment } from 'react';
import classes from './MenuOverlay.module.css';
import ReactDom from 'react-dom';
import Burger1 from '../../global/assets/img/burger1.jfif';
import CounterBox from '../../UI/CounterBox';
import CloseBtn from '../../UI/CloseBtn';
import { useContext } from 'react/cjs/react.development';
import MenuContext from '../../store/store-menu/menu-context';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseMenu}></div>;
};

const MenuModal = (props) => {
const menuCtx = useContext(MenuContext);

  return (
    <div className={classes.menu__modal}>
        <CloseBtn onCloseMenu = {props.onCloseMenu}/>
      <h1>{menuCtx.meal.name}</h1>
      <p>{menuCtx.meal.description}</p>
      <div className={classes['menu__modal--img--container']}>
        <img src={menuCtx.meal.img} />
      </div>
      <div className={classes.add__item}>
        <CounterBox/>
      </div>
    </div>
  );
};

const MenuOverlay = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onCloseMenu = {props.onCloseMenu}></Backdrop>, portalElement)}
      {ReactDom.createPortal(<MenuModal onCloseMenu = {props.onCloseMenu}></MenuModal>, portalElement)}
    </Fragment>
  );
};

export default MenuOverlay;
