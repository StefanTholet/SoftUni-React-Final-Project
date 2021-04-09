import Form from './Form/Form';
import Carousel from '../Carousel/Carousel';
import { withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { reservation } from '../services/bookService';
import UserContext from '../Contexts/UserContext';
import TokenContext from '../Contexts/TokenContext'


const Book = (
    { history }
) => {
    const [user, setUser] = useContext(UserContext)
    const [ token ] = useContext(TokenContext)

    useEffect(() => {
        if (!user && !token) {
            history.push('/login')
        }
    })

    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        reservation(e, user._id)
            .then(updatedUser => {
                console.log(updatedUser)
                // setUser(updatedUser)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Carousel  />
            <Form onFormBookingSubmit={onFormBookingSubmit} className="MuiInput-input"></Form>
        </>
    );
}
export default withRouter(Book);