import CartContext from './cart-context';
import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import MenuContext from './menu-context';

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    setItem((previousItems) => {
      return [...previousItems, item];
    });
    console.log(item);
  };

  const getTotalAmount = () => {
    let updatedAmount = 0;
    items.forEach((item) => {
      updatedAmount += item.quantity;
    });

    setTotalAmount(updatedAmount);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    getTotalAmount:getTotalAmount,
    addItem: addItem,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
