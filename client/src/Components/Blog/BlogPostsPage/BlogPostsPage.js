import HeroImage from '../../HeroImage/HeroImage';
import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { decodeBlogPost } from '../../services/blogService'
import UserContext from '../../Contexts/UserContext';
import TokenContext from '../../Contexts/TokenContext';
const useStyles = makeStyles({
    "blog-posts-container": {
    }
})


const BlogPostsPage = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    const [token] = useContext(TokenContext);
    const [blogPosts, setPosts] = useState([]);

    useEffect(() => {
        if (!user && !token) {
            history.push('/login')
        } else {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                const decodedPosts = allPosts.map(post => {
                    return decodeBlogPost(post);
                })
                setPosts(decodedPosts)
            })
            .catch(err => console.log(err))
        }
    }, []);
    const classes = useStyles();
    return (
        <main style={{display: "flex", flexDirection: "column", justifyItems: "center"}}>
            <HeroImage image={'blog.jpg'} />
            <Grid container direction="column" alignItems="center" className={classes['blog-posts-container']}>
                {blogPosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />
                )}
            </Grid>
        </main>
    );
}

export default withRouter(BlogPostsPage);