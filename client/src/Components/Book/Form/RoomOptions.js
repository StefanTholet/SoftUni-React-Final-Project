import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

const RoomOptions = () => {
    return (
        <Grid item container className="MuiGrid-spacing-xs-4" justify="center" alignItems="center">
        <InputLabel item>Room Types</InputLabel>
        <Grid item>
            <InputLabel htmlFor="singleRooms">Single</InputLabel>
            <Select
                native
                inputProps={{
                    name: 'singleRooms',
                    id: 'singleRooms',
                }}>
                <option defaultValue="None">None</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
            </Select>
        </Grid>
        <Grid item>
            <InputLabel htmlFor="doubleRooms">Double</InputLabel>
            <Select
                native
                inputProps={{
                    name: 'doubleRooms',
                    id: 'doubleRooms',
                }}>
                <option defaultValue="None">None</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
            </Select>
        </Grid>
        <Grid item>
            <InputLabel htmlFor="trippleRooms">Tripple</InputLabel>
            <Select
                native
                inputProps={{
                    name: 'trippleRooms',
                    id: 'trippleRooms',
                }}>
                <option defaultValue="None">None</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
            </Select>
        </Grid>
    </Grid>
    )
}

export default RoomOptions;