import React from 'react'

export default function AppRating({ color, children, ...props }) {
    if (color == null)
        color = "#FF9529";

    return (
        <>
            <i className="fa fa-star" style={{ color }} />
            <span
                className="ml-1"
                style={{ fontWeight: "bold" }}
                {...props}
            >
                {children}
            </span>
        </>
    )
}
