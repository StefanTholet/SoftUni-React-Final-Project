import HeroImage from '../../HeroImage/HeroImage';
import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles({
    "blog-posts-container": {
    }
})

const regextPatterns = {
    heading: /<h[0-6]>.*<\/h[0-6]>/gm,
    content: /<p>.*<\/p>/gm
}

const BlogPostsPage = (props) => {
    const [blogPosts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                const docodedPosts = allPosts.map(post => {
                    post.title = post.content.match(regextPatterns.heading)[0];
                    post.content = post.content.match(regextPatterns.content)[0];
                    return post
                })
                console.log(docodedPosts)
                setPosts(docodedPosts)
            })
            .catch(err => console.log(err))
    }, []);
    const classes = useStyles();
    return (
        <>
            <HeroImage image={'blog.jpg'} />
            <Grid container direction="column" alignItems="center" className={classes['blog-posts-container']}>
                {blogPosts.map(post => {
                    {/* post.content = post.content.split('.').splice(0, 3).join('') + '...'; */ }

                    return <PostPreviewCard blogData={post} />
                }
                )}
            </Grid>
        </>
    );
}

export default BlogPostsPage;