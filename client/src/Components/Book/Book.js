import Form from './Form/Form';
import HeroImage from '../HeroImage/HeroImage';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { reservation } from '../services/bookService';




const Book = (
    {history, user}
) => {
    // console.log(props)
    useEffect(() => {
        if (!user) {
        history.push('/login')
        }
    })
    const onFormBookingSubmit = (e) => {
        e.preventDefault();
        reservation(e)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // const [successState, updateState] = useState(null);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     reservation(event)
    //         .then(data => {
    //             updateState(data);
    //             setTimeout(() => {
    //                 updateState(null)
    //             },2000)
    //             console.log(successState)
    //         })
    // }
    return (
        <>
            <HeroImage image={'bookingHero.jpg'} />
            <Form onFormBookingSubmit={onFormBookingSubmit} className="MuiInput-input"></Form>
        </>
    );
}
export default withRouter(Book);