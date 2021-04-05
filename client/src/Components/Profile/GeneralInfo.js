import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendRequest } from '../services/server';
const GeneralInfo = ({ user, isEditing, editClickHandler }) => {
    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            firstName: e.target.firstName.value, 
            lastName: e.target.lastName.value,
            email: e.target.email.value 
        })
        sendRequest(`/users/${user._id}/edit-profile`, body, ['POST', 'application/json'])
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    return (
        <Grid className="general-info">
            <form onSubmit={onFormSubmitHandler}>
                <div className="flex-container">
                    <h2>General Information</h2>
                    <IconButton className="icon-button">
                        <EditIcon onClick={editClickHandler} />
                    </IconButton>
                </div>
                <Avatar style={{ marginBottom: '1rem' }} />
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="First Name"
                        name="firstName"
                        defaultValue={user.firstName}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Last Name"
                        name="lastName"
                        defaultValue={user.lastName}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                <TextField
                    className="general-info-labels"
                    label="Email Address"
                    name="email"
                    defaultValue={user.email}
                    variant={isEditing ? "outlined" : "standard"}
                    InputProps={!isEditing ? { readOnly: true } : null}
                />
                { isEditing
                    ? <Button type="submit" variant="outlined" style={{ marginTop: '1rem' }}>Apply Changes</Button>
                    : null }
            </form>
        </Grid>
    );
}

export default GeneralInfo;