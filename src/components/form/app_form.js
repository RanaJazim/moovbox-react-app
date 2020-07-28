import React from 'react'
import { Formik } from 'formik';
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
            onSubmit={(values, { resetForm, dirty, isValid }) => {
                onSubmitForm(values);
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
