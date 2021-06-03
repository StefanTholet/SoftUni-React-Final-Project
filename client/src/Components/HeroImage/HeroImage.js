import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
const HeroImage = (props) => {
    const { image } = props;
    const useStyles = makeStyles({
        root: {
            width: '100%',
            margin: '0 auto',
        },
        media: {
            width: '90%',
            height: '50vh',
            margin: '0 auto'
        },
    });
    const classes = useStyles();
    return (
        <Grid container item xs={12} md={12} style={{ margin: 'auto' }}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={`${props.image}`} key={image}/>
            </Card>
         </Grid>
    );
}

export default HeroImage;