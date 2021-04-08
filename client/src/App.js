import style from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import BlogPostsPage from './Components/Blog/BlogPostsPage/BlogPostsPage';
import ReadBlogPost from './Components/Blog/ReadBlogPost/ReadBlogPost';
import CreateBlog from './Components/Blog/CreateBlog/CreateBlog';
import Register from './Components/Auth/Register';
import LogIn from './Components/Auth/LogIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import locationStyles from './Components/services/locationStyles/pageWrapper';
import Profile  from './Components/Profile/Profile';
import {  sendRequest } from './Components/services/server';
import { signInUserAndGetUserData } from './Components/services/user';
import { useState, useEffect } from 'react';
import UserContext from './Components/Contexts/UserContext';

function App(props) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      sendRequest(`/auth/user/${user._id}`)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }
  },[])

  let path = props.history.location.pathname;
  let location = path;
  path.includes('read-more') ? location = '/blog-post' : location = path;
  path.includes('profile') ? location = '/users/profile' : location = path;
  const setStyles = makeStyles({
    'grid-site-container': locationStyles[location]
  });
  const classes = setStyles();

  const onRegistrationSubmitHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const password = target.password.value;
    const user = { firstName, lastName, email, password }
    const registrationUrl = '/auth/register';

    sendRequest(registrationUrl, JSON.stringify(user), ['Post', 'application/json'])
      .then(userData => {
        if (userData._id) {
          setUser(userData)
          props.history.push('/users/:userId/profile')
        }
      })
  }

  const onLoginSubmitForm = (e) => {
    e.preventDefault();
    signInUserAndGetUserData(e)
    .then(userData => {
      if (userData._id) {
      setUser(oldState => userData)
      // props.history.push(`/users/${userData._id}/profile`)
    }
    })
  }

  const menuItems = () => {
    if (!user) {
      return {
        menuItems: ['Register|', 'Login'],
        links: { 'Register|': '/register', 'Login': '/login' }
      }
    }
    return {
      onLogOut: () => setUser(null),
      menuItems: ['Book Now|', 'Blog|', 'Add Blog Post|', 'Logout'],
      links: {
        'Book Now|': '/book',
        'Blog|': '/blog',
        'Add Blog Post|': '/create-blog',
        'Logout': ''
      }
    }
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
    <Grid container className={style.App}>
      <Grid  className={classes['grid-site-container']}>
        <Header menuItems={menuItems()} user={user} />
        <Switch>
          <Route path="/book" component={Book} />
          <Route path="/blog" component={BlogPostsPage} exact />
          <Route path="/blog/read-more/:postId" component={ReadBlogPost} />
          <Route path="/create-blog" component={CreateBlog} exact />
          <Route path="/register" component={() => <Register onRegistrationSubmitHandler={onRegistrationSubmitHandler} />} exact></Route>
          <Route path="/login" component={() => <LogIn onLoginSubmitForm={onLoginSubmitForm} />} exact></Route>
          <Route path="/users/:userId/profile" component={Profile} exact></Route>
        </Switch>
       

      </Grid>
    </Grid>
    </UserContext.Provider>
  );
}

export default withRouter(App);
