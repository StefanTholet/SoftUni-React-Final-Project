import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { NavLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

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

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    const menuItems = (() => {
        if (!user) {
            return {
                menuItems: ['Register|', 'Login'],
                links: { 'Register|': '/register', 'Login': '/login' }
            }
        }
        return {
            onLogOut: () => setUser(null),
            menuItems: ['Book Now|', 'Blog|', 'Add Blog Post|', 'Logout',],
            links: {
                'Book Now|': '/book',
                'Blog|': '/blog',
                'Add Blog Post|': '/create-blog',
                'Logout': ''
            }
        }
    })();

    const classes = useStyles()

    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className={classes['nav-bar']}>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Button component={NavLink} to="/"  >
                                <Typography className={classes['nav-links']} variant="h4">
                                    Hotel Horizont
                        </Typography>
                            </Button>
                        </Grid>
                        {user
                            ? <Grid item>
                                <Button component={NavLink} to={`/users/${user._id}/profile`} >
                                    <Typography className={classes['nav-links']} variant="h5">
                                        Welcome back, {user.firstName}!
                                    </Typography>
                                </Button>
                            </Grid>
                            : null
                        }
                        <Grid item>
                            {menuItems.menuItems.map(x => <Button component={NavLink} to={menuItems.links[x]} >
                                <Typography className={classes['nav-links']} variant="h6" onClick={x === 'Logout' ? menuItems.onLogOut : null}>
                                    {x}
                                </Typography>
                            </Button>)}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default withRouter(Header);