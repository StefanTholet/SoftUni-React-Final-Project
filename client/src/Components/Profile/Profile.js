import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import BookingInfo from './BookingInfo';
import BlogsInfo from './BlogsInfo';
import './Profile.css';
import { sendRequest } from '../services/server';

const Profile = ({ user }) => {
    console.log(user)
    const [isEditing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    const isEditingGeneralInfoHandler = () => {
        setEditing(currentState => !currentState);
    }
    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            firstName: e.target.firstName.value, 
            lastName: e.target.lastName.value,
            email: e.target.email.value 
        })
        sendRequest(`/users/${user._id}/edit-profile`, body, ['POST', 'application/json'])
        .then(res => setUpdatedUser(res))
        .catch(err => console.log(err))
    }
    return (
        <Grid container className="profile-container" style={{}}>
            <GeneralInfo user={{...updatedUser}}
             isEditing={isEditing} 
             editClickHandler={isEditingGeneralInfoHandler}
             submitClickHandler={onFormSubmitHandler}
             />
            <BookingInfo user={{...updatedUser}}/>
            <BlogsInfo />

        </Grid>
    );
}

export default Profile;