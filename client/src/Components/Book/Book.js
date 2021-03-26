import Form from './Form/Form';


import { reservation } from '../services/bookService';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';



const Book = (
) => {
    
    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        reservation(e)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    // const [successState, updateState] = useState(null);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     reservation(event)
    //         .then(data => {
    //             updateState(data);
    //             setTimeout(() => {
    //                 updateState(null)
    //             },2000)
    //             console.log(successState)
    //         })
    // }

    const useStyles = makeStyles({
        root: {
            width: '100%',
            margin: 'auto',
           
        },
        media: {
            height: '10rem',
        },
    });

    const classes = useStyles();
    return (
        <Grid container item xs={12} md={12} style={{margin: 'auto'}}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='slide_1.jpg' />
            </Card>
            <Form onFormBookingSubmit={onFormBookingSubmit} className="MuiInput-input"></Form>
        </Grid>

    );
}
export default Book;