import React from 'react'
import { Formik } from 'formik';
import SubmitButton from './submit_button';

export default function AppForm(
    {
        initialValues,
        validations,
        children,
        SubmitComponent,
        onSubmitForm,
    }
) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={(values) => {
                onSubmitForm(values);
            }}
        >
            {() => (
                <>
                    {children}
                    {SubmitComponent}
                </>
            )}
        </Formik>
    )
}
