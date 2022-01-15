import React, { useContext } from "react";

const CartContext = React.createContext({
    item:[],
    totalAmount: 0,
    cartIsOpen: false,
    totalCost: 0,
    getTotalAmount: ()=>{},
    addItem: (item)=>{},
    removeItem: (id)=>{},
})

export default CartContext;