import Form from './Form/Form';
import HeroImage from '../HeroImage/HeroImage';

import { reservation } from '../services/bookService';




const Book = (
) => {
    
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
export default Book;