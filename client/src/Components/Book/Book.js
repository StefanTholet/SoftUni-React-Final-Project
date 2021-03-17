import HeroImage from '../HeroImage/HeroImage';
import Form from './Form/Form';

import './Book.css';
import { today } from './bookService';
const Book = (
    { image }
) => {
    console.log(today)
    return (
        <>
            <HeroImage image={image}>
               <Form today={today}/>
            </HeroImage>

        </>
    );
}
//TODO Add default date to start date
export default Book;