import React from 'react'

export default function FormCard({ title, children, className }) {
    if (className == null)
        className = "animate__animated animate__fadeInLeft";

    return (
        <div className={`container ${className}`} style={center}>
            <div className="card bg-dark text-white" style={{ width: "100%" }}>
                <div className="card-body">
                    <div className="card-title">
                        <h2 className="text-center">
                            {title}
                        </h2>
                    </div>
                    <div className="card-text">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
};