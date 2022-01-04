import classes from './App.module.css';
import Nav from './Nav/Nav';
import NonRestarauntsContainer from './Non-Restaraunts/NonRestarauntsContainer';

function App() {
  return (
    <div className={classes.app}>
      <header>
        <Nav />
        <NonRestarauntsContainer/>
      </header>
      <main className= {classes.main}>
        
      </main>
    </div>
  );
}

export default App;
