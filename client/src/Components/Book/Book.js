import Form from './Form/Form';
import HeroImage from '../HeroImage/HeroImage';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { reservation } from '../services/bookService';




const Book = (
    {history, user}
) => {
    useEffect(() => {
        if (!user) {
        history.push('/login')
        }
    })
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