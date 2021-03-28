import HeroImage from '../../HeroImage/HeroImage';
import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    "blog-posts-container": {
    }
})

const BlogPostsPage = (props) => {
    const [blogPosts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
        .then(result => result.json())
        .then(allPosts =>  setPosts(allPosts))
        .catch(err => console.log(err))
    },[]);
    const classes = useStyles();
   console.log(blogPosts);
    return (
        <>
        <HeroImage image={'blog.jpg'}/>
        <Grid container direction="column" alignItems="center" className={classes['blog-posts-container']}>
        {blogPosts.map(post => {
             post.content = post.content.split('.').splice(0, 3).join('') + '...';
             return <PostPreviewCard blogData={post} />}
        )}
        </Grid>
        </>
    );
}

export default BlogPostsPage;