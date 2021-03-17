const today = `${new Date().getMonth() +1}-${new Date().getDate() +1}-${new Date().getFullYear()}`;

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
   //TO DO configure back-end and mongoose to create bookings database
}

export {
    today,
    reservation
}