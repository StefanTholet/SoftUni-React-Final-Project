import { useState } from 'react';

const useAlert = () => {

    const [showAlert, setShowAlert] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');

    const setAlertType = (type, message) => {
        // console.log('args..')
        // console.log(type)
        // console.log(message)
        
        setShowAlert(type);
        // console.log('after set')
        // console.log(showAlert)
        setAlertMessage(message);
        // console.log(alertMessage)
    }
       
    return {
        showAlert,
        setShowAlert: setAlertType,
        alertMessage,
    }
}

export default useAlert