import style from './App.module.css';
import locationStyles from './locations';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import Blog from './Components/Blog/Blog';
// import RegisterCTA from './Components/Register/RegisterCTA';
function App(props) {
  const path = props.history.location.pathname;
  console.log(locationStyles[path])
  return (
    <div className={style.App}>
    <div className={style.container} style={locationStyles[path]}>
       
        <Header />
        {/* <RegisterCTA></RegisterCTA>  */}
        <Switch>
          <Route path="/book" component={Book}></Route>
          <Route path="/blog" component={Blog} exact></Route>
        </Switch>
    </div>
    </div>
  );
}

export default withRouter(App);
