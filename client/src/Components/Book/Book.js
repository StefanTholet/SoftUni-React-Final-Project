import HeroImage from '../HeroImage/HeroImage';
import Form from './Form/Form';

import './Book.css';

import { today } from './bookService';
import {reservation} from './bookService'
const Book = (
    { image }
) => {
    return (
        <>
            <HeroImage image={image}>
               <Form reservation={reservation} today={today}/>
            </HeroImage>

        </>
    );
}
//TODO Add default date to start date
export default Book;