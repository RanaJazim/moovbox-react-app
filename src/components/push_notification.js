import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PushNotification({ msg, type = "error" }) {
    useEffect(() => {
        toast[type](msg);
    }, []);

    return (
        <div>
            <ToastContainer />
        </div>
    );
}
