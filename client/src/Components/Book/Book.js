import Form from './Form/Form';
import Carousel from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { reservation } from '../services/bookService';
import UserContext from '../Contexts/UserContext';
import useAlert from '../../hooks/useAlert';
import hideAlertAndRedirect from '../services/all';
import Alert from '@material-ui/lab/Alert';
import TokenContext, { } from '../Contexts/TokenContext';
const Book = (
    { history }
) => {
    const [user, setUser] = useContext(UserContext)
    const [token] = useContext(TokenContext);
    const { showAlert, setShowAlert, alertMessage } = useAlert();

    useEffect(() => {
        if (!user && !token) {
            history.push('/login')
        }
    })

    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        const formData = [...e.target].map(input => input.value)
        if (!formData[0] || !formData[1]) {
            setShowAlert('error', 'Please select check-in and check-out dates!');
            return (hideAlertAndRedirect(setShowAlert, showAlert));
        }
        reservation(e, user._id)
            .then(updatedUser => {
                setUser(updatedUser);
                setShowAlert('success', 'Thank you for booking with us!');
                return (hideAlertAndRedirect(setShowAlert, showAlert));
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <Carousel />
            { showAlert ?
                <Alert variant="outlined" severity={showAlert} style={{ width: "20%", margin: "0 auto", marginTop: "2rem", justifyContent: "center" }}>
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