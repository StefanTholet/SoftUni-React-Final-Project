import style from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import BlogPostsPage from './Components/Blog/BlogPostsPage/BlogPostsPage';
import ReadBlogPost from './Components/Blog/ReadBlogPost/ReadBlogPost';
import CreateBlog from './Components/Blog/CreateBlog/CreateBlog';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/LogIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import locationStyles from './Components/services/locationStyles/pageWrapper';
import Profile from './Components/Profile/Profile';
import { sendRequest } from './Components/services/server';
import { signInUserAndGetUserData, registerUser } from './Components/services/user';
import { useState, useEffect } from 'react';
import UserContext from './Components/Contexts/UserContext';
import TokenContext from './Components/Contexts/TokenContext'
import useToken from './useToken';

function App(props) {

  const [user, setUser] = useState(undefined);
  const { token, setToken } = useToken();

  useEffect(() => {

    if (token) {
      sendRequest(`/auth/user/${token}`)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }
  }, [])

  const location = props.history.location.pathname;
  const setStyles = makeStyles({
    'grid-site-container': locationStyles(location)
  });

  const classes = setStyles();

  const onRegistrationSubmitHandler = (e) => {
    e.preventDefault();
    registerUser(e)
      .then(userData => {
        if (userData._id) {
          setUser(userData)
          setToken(userData._id)
        }
      })
  }

  const onLoginSubmitForm = (e) => {
    e.preventDefault();
    signInUserAndGetUserData(e)
      .then(userData => {
        if (userData._id) {
          setUser(userData)
          setToken(userData._id)
        }
      })
  }

  return (
    <TokenContext.Provider value={token}>
      <UserContext.Provider value={[user, setUser]}>
        <Grid container className={style.App}>
          <Grid className={classes['grid-site-container']}>
            <Header />
            <Switch>
              <Route path="/book" component={Book} />
              <Route path="/blog" component={BlogPostsPage} exact />
              <Route path="/blog/read-more/:postId" component={ReadBlogPost} />
              <Route path="/create-blog" component={CreateBlog} exact />
              <Route path="/users/:userId/profile" component={Profile} exact></Route>
              <Route path="/register" component={() => <Register onRegistrationSubmitHandler={onRegistrationSubmitHandler} />} exact></Route>
              <Route path="/login" component={() => <Login onLoginSubmitForm={onLoginSubmitForm} />} exact></Route>
            </Switch>
          </Grid>
        </Grid>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}




export default withRouter(App);
