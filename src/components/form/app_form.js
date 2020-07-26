import React from 'react'
import { Formik } from 'formik';

export default function AppForm({ initialValues, validations, children }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
