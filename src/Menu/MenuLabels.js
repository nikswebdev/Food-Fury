import ScrollContainer from '../UI/ScrollContainer';
import MenuLabel from './MenuLabel';

const MenuLabels = (props) => {
  return (
    <ScrollContainer noPadding={true}>
      {props.labels.map((label) => {
        return <MenuLabel key = {label.id}>{label.name}</MenuLabel>;
      })}
    </ScrollContainer>
  );
};

export default MenuLabels;
