import Form from './Form/Form';
import HeroImage from '../HeroImage/HeroImage';
import { withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { reservation } from '../services/bookService';
import UserContext from '../Contexts/UserContext';



const Book = (
    { history }
) => {
    const [user, setUser] = useContext(UserContext)
    
    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    })
    //TODO update user after booking is made - create abstract fun to always return the user in the backend
    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        reservation(e, user._id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            <HeroImage image={'bookingHero.jpg'} />
            <Form onFormBookingSubmit={onFormBookingSubmit} className="MuiInput-input"></Form>
        </>
    );
}
export default withRouter(Book);