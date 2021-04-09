import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BookingInfo = ({ user, isEditing, editClickHandler, submitClickHandler }) => {

    console.log(user)
    const { bookings } = user ? user : '';
    const bookingDetails = bookings ? bookings[0] : '';


    const saveNewBookingDetails = (e) => {
        e.preventDefault();
        const newDetails = {
            dates: {
                'check-in': e.target['check-in'].value,
                'check-out': e.target['check-out'].value,
            },
            guests: {
                adults: e.target.adults.value,
                children: e.target.children.value,
            },
            rooms: {
                single: e.target.single.value,
                double: e.target.double.value,
                triple: e.target.triple.value,
            }
        }
        submitClickHandler(newDetails);
    }


    return (
        <Grid className="general-info">
            <form onSubmit={saveNewBookingDetails}>
                <div className="flex-container">
                    <h2>Your booking information</h2>
                    <IconButton>
                        <EditIcon onClick={editClickHandler} />
                    </IconButton>
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Dates</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="Check-in"
                        name="check-in"
                        value={user ? user.bookings?.[0]?.dates['check-in'] : null}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={bookingDetails ? bookingDetails?.dates['check-in'] : null}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Check-out"
                        name="check-out"
                        defaultValue=""
                        value={bookingDetails ? bookingDetails.dates?.['check-out'] : null}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={!isEditing ? { readOnly: true } : null} />
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Guests</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="Adults"
                        name="adults"
                        defaultValue=' '
                        value={bookingDetails ? bookingDetails?.guests.adults : null}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                        autoFocus={isEditing ? true : false}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Children"
                        name="children"
                        defaultValue=' '
                        value={bookingDetails ? bookingDetails?.guests.children : null}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Rooms</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="Single"
                        name="single"
                        defaultValue=' '
                        value={bookingDetails ? bookingDetails?.rooms.single : null}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Double"
                        name="double"
                        defaultValue=' '
                        value={bookingDetails ? bookingDetails?.rooms.double : null}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Triple"
                        name="triple"
                        defaultValue=' '
                        value={bookingDetails ? bookingDetails?.rooms.triple : null}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                {isEditing
                    ? <Button type="submit" variant="outlined" style={{ marginTop: '1rem' }}>Apply Changes</Button>
                    : null}
            </form>
        </Grid>
    );
}

export default BookingInfo;