import HeroImage from '../../HeroImage/HeroImage';
import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { decodeBlogPost } from '../../services/blogService'
const useStyles = makeStyles({
    "blog-posts-container": {
    }
})


const BlogPostsPage = ({ history, user }) => {
    const [blogPosts, setPosts] = useState([]);
    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                const decodedPosts = allPosts.map(post => {
                    return decodeBlogPost(post);
                })
                setPosts(decodedPosts)
            })
            .catch(err => console.log(err))
    }, []);
    const classes = useStyles();
    return (
        <>
            <HeroImage image={'blog.jpg'} />
            <Grid container direction="column" alignItems="center" className={classes['blog-posts-container']}>
                {blogPosts.map(post => <PostPreviewCard blogData={post} user={user}/>

                )}
            </Grid>
        </>
    );
}

export default withRouter(BlogPostsPage);