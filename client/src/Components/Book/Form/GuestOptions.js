import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import {
    adultsOptions,
    childrenOptions,
} from './formService';
const GuestOptions = () => {
    return (
        <Grid item container className="MuiGrid-spacing-xs-4" justify="center" alignItems="center">
            <InputLabel item >Guest Types:</InputLabel>
            <Grid item>
                <InputLabel htmlFor="adults">Adults</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'adults',
                        id: 'adults',
                    }}>
                    {adultsOptions.map((x, index) => <option key={index} defaultValue={x}>{x}</option>)}
                </Select>
            </Grid>
            <Grid item>
                <InputLabel htmlFor="children">children</InputLabel>
                <Select
                    native
                    inputProps={{
                        name: 'children',
                        id: 'children',
                    }}>
                    <option defaultValue="none" defaultChecked="true">None</option>
                    {childrenOptions.map((x, index) => <option key={index} defaultValue={x}>{x}</option>)}
                </Select>
            </Grid>
        </Grid>
    );
}

export default GuestOptions;