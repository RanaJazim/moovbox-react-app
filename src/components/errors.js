import React from 'react'

import PushNotification from './push_notification';

export default function Errors({ error }) {
    const { data: errors } = error;
    const isArray = () => Array.isArray(errors);

    return (
        <>
            <ul className="container alert alert-danger">
                {isArray() ? <ErrorList errors={errors} /> : <SingleError error={errors} />}
            </ul>
            <PushNotification errMsg={`Error Status: ${error.status}`} />
        </>
    )
}

const ErrorList = ({ errors }) => {
    return (
        errors.map((err) => (
            <SingleError key={err} error={err} />
        ))
    );
};

const SingleError = ({ error, ...props }) => {
    return <p {...props}>{error}</p>;
};