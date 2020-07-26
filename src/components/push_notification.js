import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PushNotification({ errMsg, toastType = "error" }) {
    useEffect(() => {
        toast[toastType](errMsg);
    }, []);

    return (
        <div>
            <ToastContainer />
        </div>
    );
}
