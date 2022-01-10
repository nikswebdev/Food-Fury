import React from "react";

const MenuContext = React.createContext({
    isOpen: false,
    meal: {},
    openItemBoxHandler: ()=>{},
    closeItemBoxHandler: ()=>{},
    filterItem: ()=>{},
});

export default MenuContext;