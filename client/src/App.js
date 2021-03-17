import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './Components/Header/Header';
import HeroImage from './Components/HeroImage/HeroImage';
import Book from './Components/Book/Book';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/book" exact render={() => (
          <Book image={'slide_4.jpg'}/>
        )} /> 
        <Route path="/" exact> <HeroImage image={'slide_1.jpg'} /> </Route>
      </Switch>
     
      
    </div>
  );
}

export default App;
