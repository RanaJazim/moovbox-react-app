import React from 'react'
import { useFormikContext } from 'formik'

export default function SubmitButton({ title, ...props }) {
    const { isValid, dirty, submitForm } = useFormikContext();

    return (
        <button
            className="btn btn-success"
            type="submit"
            disabled={!(isValid && dirty)}
            onClick={submitForm}
            {...props}
        >
            {title}
        </button>
    )
}
