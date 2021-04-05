import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const BookingInfo = ({ user }) => {
    return (
        <Grid className="general-info">
            <form>
                <div className="flex-container">
                    <h2>Your booking information</h2>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Dates</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        label="Check-in"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{ readOnly: true}}
                // defaultValue={user.bookings[0].dates['check-in']}
                // InputProps={!isEditing ? { readOnly: true } : null}
            />
                    <label htmlFor="" >
                        Check-out
                    <div className="info-box"></div>
                    </label>
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Guests</h2>
                </div>
                <div className="info-box-container">
                    <label htmlFor="" >
                        Adults
                        <div className="info-box" ></div>
                    </label>
                    <label htmlFor="" >
                        Children
                    <div className="info-box"></div>
                    </label>
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Rooms</h2>
                </div>
                <div className="info-box-container">
                    <label htmlFor="" >
                        Single
                        <div className="info-box" ></div>
                    </label>
                    <label htmlFor="" >
                        Double
                    <div className="info-box"></div>
                    </label>
                    <label htmlFor="" >
                        Tripple
                    <div className="info-box"></div>
                    </label>
                </div>
            </form>
        </Grid>
    );
}

export default BookingInfo;