import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import style from './Form.css'
import DatePickers from './DatePickers';
import GuestOptions from './GuestOptions';
import RoomOptions from './RoomOptions';



const Form = ({ onFormBookingSubmit }) => {
    return (
        <form className="booking-form" onSubmit={(e) => onFormBookingSubmit(e)} style={{ marginTop: '5em' }}>
            <Grid className="form-container" spacing={2} container  direction="row" justify="center">
                <DatePickers />
                <GuestOptions />
                <RoomOptions />
                <Grid >
                    <Button type="submit"
                        style={{ color: 'black', marginTop: '1em' }} variant="outlined">Book Rooms</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default Form;