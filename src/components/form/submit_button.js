import React from 'react'

export default function SubmitButton({ title, ...props }) {
    return (
        <button
            className="btn btn-success"
            type="submit"
            {...props}
        >
            {title}
        </button>
    )
}
