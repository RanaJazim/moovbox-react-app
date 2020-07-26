import React from 'react'
import { useField } from 'formik';
import AppError from '../app_error';

export default function AppInput({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className="form-group">
            <label>
                {label}
            </label>
            <input
                className="form-control"
                {...field}
                {...props}
            />
            {(meta.error && meta.touched) && <AppError errMsg={meta.error} />}
        </div>
    )
}
