import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Wrapper from './Components/Wrapper/Wrapper';
import Header from './Components/Header/Header';

import Book from './Components/Book/Book';
import RegisterCTA from './Components/Register/RegisterCTA';
function App(Match, Location, History) {
  console.log(Match, Location, History)
  return (
    <div className="App">
    <Wrapper image="slide_1.jpg">
    <Header />
      {/* <RegisterCTA></RegisterCTA>  */}
      <Switch>
        <Route path="/book" exact render={() => (
          <Book image={'slide_4.jpg'}/>
        )} /> 
      </Switch>
    </Wrapper>
    </div>
  );
}

export default App;
