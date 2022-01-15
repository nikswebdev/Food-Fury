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

  const removeItem = (mealName)=>{
    const mapNames = items.map(item =>{ return item.name;});
    const filteredItemIndex = mapNames.indexOf(mealName);

    setItem(previousItems =>{
      console.log(previousItems.splice(filteredItemIndex, 1));
      console.log(previousItems);
      return [...previousItems];
    })

  }

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
    removeItem: removeItem,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
