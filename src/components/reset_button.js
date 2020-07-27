import React from 'react'
import { useFormikContext } from 'formik'

export default function ResetButton({ title, ...props }) {
    const { resetForm } = useFormikContext();

    return (
        <button
            className="btn btn-danger ml-3"
            onClick={resetForm}
            {...props}
        >
            {title}
        </button>
    )
}
