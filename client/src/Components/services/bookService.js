
import { sendRequest } from './server';
const today = `${new Date().getMonth() + 1}-${new Date().getDate() + 1}-${new Date().getFullYear()}`;

function getBookingData(event) {
    event.preventDefault();
    const formData = [...event.target].map(input => input.value)
    return JSON.stringify({
        dates: {
            'check-in': formData[0],
            'check-out': formData[1],
        },
        guests: {
            'adults': formData[2],
            'children': formData[3],
        },
        rooms: {
            single: formData[4],
            double: formData[5],
            tripple: formData[6],
        },
    })
}

function reservation(event) {
    const bookingData = getBookingData(event);

    const endPoint = '/bookings/add-booking';
    return sendRequest(endPoint, bookingData, ['Post', 'application/json'])
}






export {
    today,
    reservation,
}