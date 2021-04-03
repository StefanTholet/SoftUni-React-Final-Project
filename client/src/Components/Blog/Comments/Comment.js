import { Avatar, Grid, Paper } from "@material-ui/core";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    'new-comment': {
        color: 'black',
        width: '100%',
        minHeight: '10rem',
    },
    'textarea-sizing': {

    }
}))

const Comment = (props) => {
    console.log('render')
    const isNewComment = props.bool;

    const classes = useStyles();
    
    return (
        <Paper className={!isNewComment ? null : classes['new-comment']} style={{marginBottom: '2rem'}} >
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="Remy Sharp" src={props.avatar} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>

                    {!isNewComment ?
                        <h4 style={{ margin: 0, textAlign: "left" }}>{props.author}</h4>
                        :
                        <form onSubmit={(e) => props.submitComment(e)}>
                            <TextField
                                name='comment'
                                className={classes['textarea-sizing']}
                                id="standard-textarea"
                                multiline
                                fullWidth
                            />
                            <Button type="submit" style={{ marginBottom: '2.5rem' }}
                                variant="contained"
                            >
                                Submit</Button>
                        </form>
                    }
                    <p style={{ textAlign: "left" }}>
                        {props.content}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        Posted on: {props.postedOnDate}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Comment; 