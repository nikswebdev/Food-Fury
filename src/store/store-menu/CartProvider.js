import CartContext from './cart-context';
import React, { useState } from 'react';

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const addItem = (item) => {
    setItem((previousItems) => {
      return [...previousItems, item];
    });
  };

  const calculateTotal = () => {
    if (items.length) {
      const prices = items.map((item) => {
        return item.price * item.quantity;
      });

      setTotalCost(prices.reduce((prevVal, CurVal) => prevVal + CurVal));
    }
  };

  const getTotalAmount = () => {
    let updatedAmount = 0;
    items.forEach((item) => {
      updatedAmount += item.quantity;
    });

    setTotalAmount(updatedAmount);

    //open or close the checkout cart depending on total amount
    if (updatedAmount > 0) setCartIsOpen(true);

    if (updatedAmount < 1) setCartIsOpen(false);

    //get total cost
    calculateTotal();

  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    cartIsOpen: cartIsOpen,
    totalCost: totalCost,
    getTotalAmount: getTotalAmount,
    addItem: addItem,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
