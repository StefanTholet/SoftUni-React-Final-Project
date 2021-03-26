import { today } from '../../services/bookService';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const DatePickers = () => {
    return (
        <Grid item className="date-pickers">
            <TextField
                id="check-in"
                label="Check-in"
                type="date"
                defaultValue={today}
                InputLabelProps={{
                    shrink: true,
                }}
                style={{ marginRight: '2em' }}
            />
            <TextField
                id="check-out"
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