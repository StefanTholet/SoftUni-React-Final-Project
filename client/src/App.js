import style from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Book from './Components/Book/Book';
import BlogPostsPage from './Components/Blog/BlogPostsPage/BlogPostsPage';
import ReadBlogPost from './Components/Blog/ReadBlogPost/ReadBlogPost';
import CreateBlog from './Components/Blog/CreateBlog/CreateBlog';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import locationStyles from './Components/services/locationStyles/pageWrapper';

function App(props) {
  let path = props.history.location.pathname;
  let location = path;
  path.includes('read-more') ? location = '/blog-post' : location = path;
  const setStyles = makeStyles({
    'grid-site-container': locationStyles[location]
  });
  const classes = setStyles()
  return (
    <Grid container className={style.App}>
        <Grid className={classes['grid-site-container']}>
          <Header />
          <Switch>
            <Route path="/book" component={Book}></Route>
            <Route path="/blog" component={BlogPostsPage} exact></Route>
            <Route path="/blog/read-more/:postId" component={ReadBlogPost}></Route>
            <Route path="/create-blog" component={CreateBlog} exact></Route>
          </Switch>
          {/* </div> */}
        
      </Grid>
    </Grid>

  );
}

export default withRouter(App);
