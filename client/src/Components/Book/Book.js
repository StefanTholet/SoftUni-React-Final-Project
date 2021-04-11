import Form from './Form/Form';
import Carousel from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { reservation } from '../services/bookService';
import UserContext from '../Contexts/UserContext';
import TokenContext from '../Contexts/TokenContext';
import useAlert from '../../hooks/useAlert';
import hideAlertAndRedirect from '../services/all';
import Alert from '@material-ui/lab/Alert';

const Book = (
    { history }
) => {
    const [user, setUser] = useContext(UserContext)
    const { showAlert, setShowAlert, alertMessage } = useAlert();

    useEffect(() => {
        if (showAlert === 'success') {
            return hideAlertAndRedirect(setShowAlert, showAlert,)
        }
        hideAlertAndRedirect(setShowAlert);
    }, [showAlert])

    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    })

    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        const formData = [...e.target].map(input => input.value)
        if (!formData[0] || !formData[1]) {
            setShowAlert('error', 'Please select check-in and check-out dates!');
            return; 
        }
        reservation(e, user._id)
            .then(updatedUser => {
                 setUser(updatedUser)
                 setShowAlert('success', 'Thank you for booking with us!')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Carousel  />
            { showAlert ?
                <Alert variant="outlined" severity={showAlert} style={{width: '20%', margin: '0 auto', marginTop: '2rem'}}>
                    {alertMessage}
                </Alert>
                :
                null
            }
            <Form onFormBookingSubmit={onFormBookingSubmit} className="MuiInput-input"></Form>
        </>
    );
}
export default withRouter(Book);