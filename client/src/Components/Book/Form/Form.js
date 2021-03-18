import './Form.css'
import { adultsOptions, childrenOptions, roomOptions } from './formService';
import { useState } from 'react';
const Form = (props) => {

    return (
        
            <div className="form-parent">
                <form action="" className="booking-form" onSubmit={(event) => props.handleSubmit(event)}>
                    <label htmlFor="check-in">Check-in date</label>
                    <input type="date" name="check-in" />
                    <label htmlFor="Check-out">Check-out date</label>
                    <input type="date" name="Check-out" id="" />
                    <label htmlFor="adults">Adults</label>
                    <select name="adults" id="">
                        {adultsOptions}
                    </select>
                    <label htmlFor="children">Children</label>
                    <select name="children" id="">
                        <option value="No children" >No children</option>
                        {childrenOptions}
                    </select>
                    <label htmlFor="room">Rooms</label>
                    <select name="rooms" id="">
                        {roomOptions}
                    </select>
                    <input className="submit-booking" type="submit" value="Book" />
                </form>
            </div>
        
    );
}

export default Form;
