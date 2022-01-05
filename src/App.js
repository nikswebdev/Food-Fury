import classes from './App.module.css';
import FoodOptions from './FoodOptions/FoodOptions';
import Nav from './Nav/Nav';
import NonRestarauntsContainer from './Non-Restaraunts/NonRestarauntsContainer';
import Settings from './Settings/Settings';

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
        <div className={classes.dummy}></div>
      </main>
    </div>
  );
}

export default App;
