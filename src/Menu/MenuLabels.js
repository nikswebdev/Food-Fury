import ScrollContainer from '../UI/ScrollContainer';
import classes from './MenuLabels.module.css';
import MenuLabel from './MenuLabel';

const MenuLabels = () => {
  return (
    <ScrollContainer noPadding = {true}>
      <MenuLabel labelActive = {true}>Popular Items</MenuLabel>
      <MenuLabel>Gourmet Burgers</MenuLabel>
      <MenuLabel>Finest Burgers</MenuLabel>
      <MenuLabel>Tavern Burgers</MenuLabel>
      <MenuLabel>Appetizers</MenuLabel>
      <MenuLabel>Entrees</MenuLabel>
      <MenuLabel>Kids</MenuLabel>
      <MenuLabel>Salads and Soups</MenuLabel>
      <MenuLabel>Sandwiches</MenuLabel>
      <MenuLabel>Desserts</MenuLabel>
      <MenuLabel>Sides</MenuLabel>
      <MenuLabel>Drinks</MenuLabel>
    </ScrollContainer>
  );
};

export default MenuLabels;
