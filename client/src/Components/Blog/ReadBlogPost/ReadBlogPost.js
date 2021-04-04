
import BlogPost from './BlogPost';
import { getOnePost } from '../../services/blogService';
import HeroImage from '../../HeroImage/HeroImage';
import CommentsSection from '../Comments/CommentsSection';
import { useState, useEffect } from 'react';
import { compileBlogPost } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
const ReadBlogPost = (props) => {
    //TODO force ReadBlogPost component to re-render so that newest comment is shown right away
    const [post, setPost] = useState({});

    const { match, user, history } = props;

    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
        const { postId } = match.params;
        getOnePost(postId)
            .then(res => res.json())
            .then(res => {
                setPost(compileBlogPost(res));
            })
            .catch(err => console.log(err))
    }, []);
    return ( 
            <Grid container justifyContent="middle">
                <HeroImage image={`/blog.jpg`} />
                <BlogPost post={post} />
                <CommentsSection post={post} />
            </Grid> 
    );
}

export default withRouter(ReadBlogPost);