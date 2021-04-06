import Grid from '@material-ui/core/Grid';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import GeneralInfo from './GeneralInfo';
import BookingInfo from './BookingInfo';
import BlogsInfo from './BlogsInfo';
import './Profile.css';
import {
    uploadEditedGeneralInfo,
    uploadEditedBooking,
    sendRequest,
    getUserInfo
} from '../services/server';


const Profile = () => {
    const [user, setUser] = useContext(UserContext)

    const [isEditingGeneralInfo, setisEditingGeneralInfo] = useState(false);
    const [isEditingBookingInfo, setisEditingBookingInfo] = useState(false);

    const isEditingGeneralInfoHandler = () => {
        setisEditingGeneralInfo(currentState => !currentState);
    }

    const onGeneralInfoFormSubmitHandler = (e) => {
        e.preventDefault();
        uploadEditedGeneralInfo(e, user._id)
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }

    const isEditingBookingInfoHandler = () => {
        setisEditingBookingInfo(currentState => !currentState);
    }

    const onBookingInfoFormSubmitHandler = (newBookingDetails) => {
        uploadEditedBooking(newBookingDetails, user._id, user.bookings[0]._id)
            .then(res => {
                if (user) {
                    getUserInfo(user._id)
                    .then(res => setUser(res));
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <Grid container className="profile-container" style={{}}>
            <GeneralInfo user={{ ...user }}
                isEditing={isEditingGeneralInfo}
                editClickHandler={isEditingGeneralInfoHandler}
                submitClickHandler={onGeneralInfoFormSubmitHandler}
            />
            <BookingInfo user={{ ...user }}
                isEditing={isEditingBookingInfo}
                editClickHandler={isEditingBookingInfoHandler}
                submitClickHandler={onBookingInfoFormSubmitHandler}
            />
            <BlogsInfo />

        </Grid>
    );
}

export default Profile;