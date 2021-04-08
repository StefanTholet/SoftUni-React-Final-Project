import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useRef, useEffect } from 'react'
const GeneralInfo = ({ user, isEditing, editClickHandler, submitClickHandler }) => {
    
    
    return (
        <Grid className="general-info">
            <form onSubmit={submitClickHandler}>
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
                        autoFocus={isEditing ? true : false}

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
                <div style={{marginTop: '1rem'}}>
                <TextField
                    className="general-info-labels"
                    label="Email Address"
                    name="email"
                    defaultValue={user.email}
                    variant={isEditing ? "outlined" : "standard"}
                    InputProps={!isEditing ? { readOnly: true } : null}
                />
                </div>
                { isEditing
                    ? <Button type="submit" variant="outlined" style={{ marginTop: '1rem' }}>Apply Changes</Button>
                    : null }
            </form>
        </Grid>
    );
}

export default GeneralInfo;