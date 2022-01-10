import MenuContext from './menu-context';
import { useState } from 'react';
import DUMMY_MENU_CONTEXT from './DUMMY_MENU';

const MenuProvider = (props) => {
  const [itemBoxIsOpen, setItemBoxIsOpen] = useState(false);
  const [filteredItem, setFilteredItem] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    img: '',
  });

  const openItemBoxHandler = () => {
    setItemBoxIsOpen(true);
  };

  const closeItemBoxHandler = () => {
    setItemBoxIsOpen(false);
  };

  const filterItem = (itemName) => {
    DUMMY_MENU_CONTEXT.menu.forEach((label) => {
      label.items.filter((item) => {
        if (item.name === itemName) {
          setFilteredItem(item);
        }
      });
    });
  };

  const menuContext = {
    isOpen: itemBoxIsOpen,
    meal: filteredItem,
    openItemBoxHandler: openItemBoxHandler,
    closeItemBoxHandler: closeItemBoxHandler,
    filterItem: filterItem,
  };

  return <MenuContext.Provider value={menuContext}>{props.children}</MenuContext.Provider>;
};

export default MenuProvider;
