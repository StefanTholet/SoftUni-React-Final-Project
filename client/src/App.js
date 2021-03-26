import style from './App.module.css';
import { setStyles } from './Components/services/locationStyles/pageWrapper';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import Blog from './Components/Blog/Blog';
import CreateBlog from './Components/CreateBlog/CreateBlog';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import locationStyles from './Components/services/locationStyles/pageWrapper';

function App(props) {
  const path = props.history.location.pathname;
  const setStyles = makeStyles({
    'grid-site-container': locationStyles[path]
  });
  const classes = setStyles()
  console.log(classes)
  return (
    <div className={style.App}>
      <Grid container>
        <Paper className={classes['grid-site-container']}>
          <Header />

          <Switch>
            <Route path="/book" component={Book}></Route>
            <Route path="/blog" component={Blog} exact></Route>
            <Route path="/create-blog" component={CreateBlog} exact></Route>
          </Switch>
          {/* </div> */}
        </Paper>
      </Grid>
    </div>

  );
}

export default withRouter(App);
