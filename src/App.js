import classes from './App.module.css';
import FoodOptions from './FoodOptions/FoodOptions';
import Nav from './Nav/Nav';
import NonRestarauntsContainer from './Non-Restaraunts/NonRestarauntsContainer';
import Reviews from './Reviews/Reviews';
import Settings from './Settings/Settings';
import Menu from './Menu/Menu';
import FullMenu from './Menu/FullMenu/FullMenu';

function App() {
  return (
    <div className={classes.app}>
      <header>
        <Nav />
        <NonRestarauntsContainer/>
      </header>
      <main className= {classes.main}>
        <FoodOptions/>
        <Settings/>
        <Reviews/>
        <Menu/>
        <FullMenu/>
      </main>
    </div>
  );
}

export default App;
