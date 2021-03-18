import { baseUrl } from '../config/index';

const today = `${new Date().getMonth() + 1}-${new Date().getDate() + 1}-${new Date().getFullYear()}`;

function getBookingData(event) {
    event.preventDefault();
    const formData = [...event.target].map(input => input.value)
    return {
        'check-in': formData[0],
        'check-out': formData[1],
        'adults': formData[2],
        'children': formData[3],
        'rooms': formData[4],
    }
}

function reservation(event) {
    const bookingData = getBookingData(event);
    if (bookingData.children === 'No children') bookingData.children = 0;
    return fetch(`${baseUrl}/book`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => console.log(err));

    //TO DO configure back-end and mongoose to create bookings database
}

export {
    today,
    reservation
}