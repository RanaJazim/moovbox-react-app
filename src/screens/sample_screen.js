import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SampleScreen({ isCheck }) {

    if (isCheck) {
        toast("Done");
    }

    const notify = () => toast("Wow so easy !");

    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    );
}