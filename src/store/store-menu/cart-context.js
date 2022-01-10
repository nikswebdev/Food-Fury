import React, { useContext } from "react";

const CartContext = React.createContext({
    item:[],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{},
})

export default CartContext;