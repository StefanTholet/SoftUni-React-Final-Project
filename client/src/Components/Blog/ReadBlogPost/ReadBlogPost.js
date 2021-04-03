
import HeroImage from '../../HeroImage/HeroImage';
import { getOnePost } from '../../services/blogService';
import Typography from '@material-ui/core/Typography';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import CommentsSection from '../Comments/CommentsSection';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { compileBlogPost } from '../../services/blogService';

const useStyles = makeStyles(() => ({
    'post-title': {
        color: 'black',
        alignSelf: 'start',
        fontSize: '1.4rem'
    },
    'blog-container': {
        margin: '0 auto',
        marginTop: '2rem',
        maxWidth: '40%'
    },
    media: {
        width: '100%',
        height: '250px',
        borderRadius: '5px'
    },
    'blog-content': {
        // maxWidth: '40%',
        marginTop: '1rem',
        color: 'black'
    },
    divider: {
        width: '100%',
        marginBlock: '1rem'
    },
    'site-anchor': {
        textDecoration: 'underline'
    }
}))
const ReadBlogPost = (props) => {
    //TODO force ReadBlogPost component to re-render so that newest comment is shown right away
    const [post, setPost] = useState({});
    const currentLocation = window.location.origin;
    const classes = useStyles();
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
        <>
            <HeroImage image={currentLocation + `/blog.jpg`} />
            <Grid container alignItems="center" spacing={4}
                className={classes['blog-container']}
                direction="column">
                <Typography variant='h3' className={classes['post-title']}>
                    {ReactHtmlParser(post.title)}
                </Typography>
                <AuthorAvatar author={post.author} createdOn={post.createdOn} />
                <CardMedia
                    className={classes.media}
                    image={`${currentLocation}/${post.imageUrl}`}
                    title={ReactHtmlParser(post.title)}
                />
                <Typography className={classes['blog-content']}
                    variant='body1'>
                    {ReactHtmlParser(post.content)}
                </Typography>
                <Divider className={classes.divider} variant="middle" />
                <Typography style={{ marginRight: '36%' }}>Originally published at <Link to="/" className='site-anchor'>Hotel Horizont</Link> on {post.createdOn}.</Typography>
                <Divider className={classes.divider} variant="middle" />
                <CommentsSection post={post} />
            </Grid>
        </>
    );
}

export default withRouter(ReadBlogPost);