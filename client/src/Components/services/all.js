export default function hideAlertAndRedirect(setShowAlert, redirectLink, history) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            return resolve(setShowAlert(false));
        }, 2000)
        
    })
    .then(res => {
        if (redirectLink && history) {
        history.push(redirectLink)
    }
    });
}
// `/users/${userId}/profile`

