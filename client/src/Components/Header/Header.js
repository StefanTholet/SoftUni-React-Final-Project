import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { NavLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const Header = (props) => {
    const useStyles = makeStyles({
        'nav-links': {
            color: 'black',
            fontFamily: 'Helvetica',
            textTransform: 'none',
        },
        'nav-bar': {
            backgroundColor: 'white',
            
        }     
    });
    const classes = useStyles()

    return (
        <>
            <AppBar   position="static" >
                <Toolbar variant="dense" className={classes['nav-bar']}>
                    <Grid container justify="space-evenly">
                    <Grid item>
                    <Button component={NavLink} to="/"  >
                        <Typography className={classes['nav-links']} variant="h4">
                            Hotel Horizont
                        </Typography>
                    </Button>
                    </Grid>
                    <Grid item>
                    <Button component={NavLink} to="/book" >
                        <Typography className={classes['nav-links']} variant="h6">
                            Book Now
                        </Typography>
                    </Button>
                    <Button component={NavLink} to="/blog" >
                        <Typography className={classes['nav-links']} variant="h6">
                            Blog
                        </Typography>
                    </Button>
                    <Button component={NavLink} to="/create-blog" >
                        <Typography className={classes['nav-links']} variant="h6">
                           Add Blog Posts
                        </Typography>
                    </Button>
                    </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
        //     <header className="header-nav">
        // 	<div className="nav-container">
        //         <HotelName />
        // 		<Nav></Nav>
        // 	</div>
        // </header>
    )
}

export default withRouter(Header);