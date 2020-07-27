import React from 'react'
import { Formik } from 'formik';
import SubmitButton from './submit_button';
import ResetButton from '../reset_button';

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
            onSubmit={(values, { resetForm, isValid }) => {
                onSubmitForm(values);
                if (isValid) resetForm();
            }}
        >
            {() => (
                <>
                    {children}
                    {SubmitComponent}
                    <ResetButton title="Reset" />
                </>
            )}
        </Formik>
    )
}
