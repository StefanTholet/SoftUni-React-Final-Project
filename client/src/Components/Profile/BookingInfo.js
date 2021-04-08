import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BookingInfo = ({ user, isEditing, editClickHandler, submitClickHandler }) => {
   
    const bookingDetails = user?.bookings[0];
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
                        defaultValue={bookingDetails?.dates['check-in']}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={bookingDetails?.dates['check-in']}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Check-out"
                        name="check-out"
                        defaultValue={bookingDetails?.dates['check-out']}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={bookingDetails?.dates['check-in']}
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
                        defaultValue={bookingDetails?.guests.adults}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Children"
                        name="children"
                        defaultValue={bookingDetails?.guests.children}
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
                        defaultValue={bookingDetails?.rooms.single}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Double"
                        name="double"
                        defaultValue={bookingDetails?.rooms.double}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Triple"
                        name="triple"
                        defaultValue={bookingDetails?.rooms.triple}
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