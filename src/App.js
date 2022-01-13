import classes from './App.module.css';
import FoodOptions from './FoodOptions/FoodOptions';
import Nav from './Nav/Nav';
import NonRestarauntsContainer from './Non-Restaraunts/NonRestarauntsContainer';
import Reviews from './Reviews/Reviews';
import Settings from './Settings/Settings';
import Menu from './Menu/Menu';
import FullMenu from './Menu/FullMenu/FullMenu';
import React, { Fragment, useContext, useState } from 'react';
import DUMMY_MENU from './store/store-menu/DUMMY_MENU';
import MenuOverlay from './Menu/MenuOverlay/MenuOverlay';
import MenuContext from './store/store-menu/menu-context';
import CartCheckout from './Cart/CartCheckout';
import CartContext from './store/store-menu/cart-context';

function App() {
  const menuCtx = useContext(MenuContext);
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {menuCtx.isOpen && <MenuOverlay onCloseMenu = {menuCtx.closeItemBoxHandler}/>}
    
      <div className={classes.app}>
        <header>
          <Nav />
          <NonRestarauntsContainer />
        </header>
        <main className={classes.main}>
          {cartCtx.cartIsOpen && <CartCheckout/>}
          <FoodOptions />
          <Settings />
          <Reviews />
          <Menu labels={DUMMY_MENU.menu} />
          <FullMenu menu={DUMMY_MENU.menu} onOpenMenu = {menuCtx.openItemBoxHandler}/>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
