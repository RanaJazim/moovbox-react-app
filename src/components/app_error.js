import React from 'react'

export default function AppError({ errMsg }) {
    return (
        <div style={{ color: "red", fontWeight: "bold" }}>
            {errMsg}
        </div>
    )
}
