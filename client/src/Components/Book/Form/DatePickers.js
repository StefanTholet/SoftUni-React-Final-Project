import { today } from '../../services/bookService';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const DatePickers = () => {
    return (
        <Grid item className="date-pickers">
            <TextField
                id="checkIn"
                label="Check-in"
                type="date"
                defaultValue={today}
                InputLabelProps={{
                    shrink: true,
                }}
                style={{ marginRight: '2em' }}
            />
            <TextField
                id="checkOut"
                label="Check-out"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
    );
}

export default DatePickers;