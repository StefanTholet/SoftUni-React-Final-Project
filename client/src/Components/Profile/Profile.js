import Grid from '@material-ui/core/Grid';
import { useState, useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import GeneralInfo from './GeneralInfo';
import BookingInfo from './BookingInfo';
import BlogsInfo from './BlogsInfo';
import './Profile.css';
import { uploadEditedGeneralInfo, getUserInfo } from '../services/user';
import { uploadEditedBooking } from '../services/bookService';
import { deleteBlogPost, deleteFavoritePost } from '../services/blogService';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const Profile = ({ history }) => {
    const [user, setUser] = useContext(UserContext)
    console.log(user)
    if (!user) {
        history.push('/login')
    }

    const [isEditingGeneralInfo, setisEditingGeneralInfo] = useState(false);
    const [isEditingBookingInfo, setisEditingBookingInfo] = useState(false);

    const isEditingGeneralInfoHandler = () => {
        setisEditingGeneralInfo(currentState => !currentState);
    }

    const onGeneralInfoFormSubmitHandler = (e) => {
        e.preventDefault();
        uploadEditedGeneralInfo(e, user._id)
            .then(updatedUser => setUser(updatedUser))
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
                        .then(updatedUser => setUser(updatedUser));
                }
            })
            .catch(err => console.log(err))
    }

    const blogBoxClickHandler = (id) => {
        history.push(`/blog/read-more/${id}`)
    }

    const ownBlogDeleteHandler = (blogId) => {
        deleteBlogPost(blogId, user._id)
            .then(updatedUser => setUser(updatedUser))
    }

    const deleteFavoriteHandler = (blogId) => {
        deleteFavoritePost(blogId, user._id)
        .then(updatedUser => setUser(updatedUser))
        .catch(err => console.log(err))
    }
    return (
        <Grid container className="profile-container" style={{}}>
            <GeneralInfo
                user={{ ...user }}
                isEditing={isEditingGeneralInfo}
                editClickHandler={isEditingGeneralInfoHandler}
                submitClickHandler={onGeneralInfoFormSubmitHandler}
            />
            <Divider />
            <BookingInfo user={{ ...user }}
                isEditing={isEditingBookingInfo}
                editClickHandler={isEditingBookingInfoHandler}
                submitClickHandler={onBookingInfoFormSubmitHandler}
            />
            <Divider />
            <BlogsInfo
                blogBoxClickHandler={blogBoxClickHandler}
                user={{ ...user }}
                deleteFavoriteHandler={deleteFavoriteHandler}
                ownBlogDeleteHandler={ownBlogDeleteHandler} />
            <Divider className="divider" />
        </Grid>
    );
}

export default withRouter(Profile);