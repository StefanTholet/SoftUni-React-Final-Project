
import BlogPost from './BlogPost';
import { getOnePost } from '../../services/blogService';
import HeroImage from '../../HeroImage/HeroImage';
import CommentsSection from '../Comments/CommentsSection';
import { useState, useEffect, useContext } from 'react';
import { decodeBlogPost } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
const ReadBlogPost = (props) => {
    //TODO force ReadBlogPost component to re-render so that newest comment is shown right away
    const [post, setPost] = useState({});
    const { match, history } = props;
    const [user] = useContext(UserContext);
    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
        const { postId } = match.params;
        getOnePost(postId)
            .then(res => res.json())
            .then(res => {
                setPost(decodeBlogPost(res));
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