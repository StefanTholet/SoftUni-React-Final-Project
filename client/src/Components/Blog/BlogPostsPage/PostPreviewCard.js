import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { sendRequest } from '../../services/server';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '40rem',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    'card-container': {
        marginTop: '1rem',
    },
    'card-footer': {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

// 

const PostPreviewCard = ({ blogData, user }) => {
    // set useEffect to check if blogId can be found inside user.favoritePosts and set favorite to true if so
    // add check to click handler to see if favorite is true and return if so
    // change color of icon to reflect the status
    const [isFavorite, setFavorite] = useState(null)

    const { title, createdOnDate, imageUrl, altImage, content, _id } = blogData;

    useEffect(() => {
        setFavorite(user.favoritePosts.includes(_id))
    }, [])
 
    const classes = useStyles();

    const addPostToFavorites = (id) => {
        if (isFavorite) {
            console.log('already in favorites')
            sendRequest(`/blog/${id}/remove-post-from-favorites`,
                JSON.stringify({ userID: user._id }),
                ['POST', 'application/json'])
                .then(res => {
                    console.log(res)
                    setFavorite(false)
                })
                .catch(err => console.log(err))
            return;
        }
        sendRequest(`/blog/${id}/add-post-to-favorites`,
            JSON.stringify({ userID: user._id }),
            ['POST', 'application/json'])
            .then(res => {
                console.log(res)
                setFavorite(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <Grid item className={classes['card-container']} xs={6}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
            </Avatar>
                    }
                    title={ReactHtmlParser(title)}
                    subheader={createdOnDate}
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={altImage}
                    width={400}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {ReactHtmlParser(content)}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes['card-footer']}>
                    <IconButton aria-label="add to favorites" onClick={() => addPostToFavorites(_id)}>
                        <FavoriteIcon style={isFavorite ? { color: '#f50057' } : null} />
                    </IconButton>
                    <Button component={Link} to={`/blog/read-more/${_id}`}
                        style={{
                            backgroundColor: red[500], color: 'white'
                        }}
                    >Read more</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PostPreviewCard
