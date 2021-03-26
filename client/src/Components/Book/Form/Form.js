import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DatePickers from './DatePickers';
import GuestOptions from './GuestOptions';
import RoomOptions from './RoomOptions';



const Form = ({ onFormBookingSubmit }) => {
    return (
        <form onSubmit={(e) => onFormBookingSubmit(e)} style={{ marginTop: '5em' }}>
            <Grid className="form-container" spacing={2} container xs={4} direction="row" justify="center">
                <DatePickers />
                <GuestOptions />
                <RoomOptions />
                <Grid >
                    <Button type="submit
                    " style={{ color: 'black', marginTop: '1em' }} variant="outlined">Book Rooms</Button>
                </Grid>
            </Grid>
            <style jsx={true}>{`
                    .form-container {
                        border: 1px solid black;
                        border-radius: 5px;
                        margin: 0 auto;
                        margin-top: 1em;
                        padding: 2em
                    }
                    form {
                        width:100%
                    }
            `}</style>
        </form>
    );
}

export default Form;