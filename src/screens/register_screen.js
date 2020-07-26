import React from 'react'
import { FormCard } from '../components/form'

export default function RegisterScreen() {
    return (
        <FormCard title="Register">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="example@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="example@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password_confirmation">Retype Password again:</label>
                <input
                    type="password"
                    className="form-control"
                    id="password_confirmation"
                />
            </div>
            <button className="btn btn-success">Register</button>
        </FormCard>
    )
}
