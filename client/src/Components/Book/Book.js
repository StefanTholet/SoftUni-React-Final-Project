import HeroImage from '../HeroImage/HeroImage';
import Form from './Form/Form';
import Notification from '../Notification/Notification'
import { useState } from 'react';
import  styles  from './Book.module.css';

import { today } from './bookService';
import { reservation } from './bookService';
const Book = (
    { image }
) => {
    const [successState, updateState] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        reservation(event)
            .then(data => {
                updateState(data);
                setTimeout(() => {
                    updateState(null)
                },2000)
                console.log(successState)
            })
    }

    return (
        <>
            <HeroImage image={image}>
            <div className={styles['form-wrapper']}>
                    <Form  handleSubmit={handleSubmit} today={today} />
                    {successState ? <Notification class={'margin-bottom-setter'} message={'Your booking is successful!'} /> 
                    : <div className={styles['margin-bottom-setter']}></div>}
                    </div>
            </HeroImage>

        </>
    );
}
//TODO Add default date to start date
export default Book;