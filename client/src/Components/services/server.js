import { baseUrl } from '../config/index';

function sendRequest(endPoint, body, options) {
    if (!body) {
        return fetch(`${baseUrl}${endPoint}`);
    } else {

    }
    return fetch(`${baseUrl}${endPoint}`, {
        method: options[0],
        headers: {
            'Content-Type': options[1]
        },
        body: body
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => console.log(err));
}

function uploadEditedGeneralInfo(e, id) {
    const body = JSON.stringify({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value
    })
    return sendRequest(`/users/${id}/edit-profile`, body, ['POST', 'application/json']);
}

function uploadEditedBooking(updatedBookingDetails, userId, bookingId) {
    return sendRequest(`/users/${userId}/bookings/${bookingId}/edit`
        , JSON.stringify(updatedBookingDetails),
        ['POST', 'application/json']);
}

function signInUserAndGetUserData(e) {
    const loginDetails = JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
    });
    return sendRequest('/auth/login', loginDetails, ['POST', 'application/json'])
}

function getUserInfo(id) {
    return sendRequest(`/users/${id}/get-info`)
        .then(res => res.json())
}

export {
    sendRequest,
    uploadEditedGeneralInfo,
    uploadEditedBooking,
    signInUserAndGetUserData,
    getUserInfo
}