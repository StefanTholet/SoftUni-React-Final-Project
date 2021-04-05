import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import BookingInfo from './BookingInfo';
import BlogsInfo from './BlogsInfo';
import './Profile.css'
const Profile = ({ user }) => {
    const [isEditing, setEditing] = useState(false);
    const isEditingGeneralInfoHandler = () => {
        setEditing(currentState => !currentState);
    }
    return (
        <Grid container className="profile-container" style={{}}>
            <GeneralInfo user={{...user}} isEditing={isEditing} editClickHandler={isEditingGeneralInfoHandler}/>
            <BookingInfo />
            <BlogsInfo />

        </Grid>
    );
}

export default Profile;