import React from 'react'
import FormCard from '../components/form_card'

export default function ForgetPasswordScreen() {
    return (
        <FormCard title="Forget Password">
            <div className="form-group">
                <label htmlFor="email">Enter your email to reset your password:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@example.com"
                />
            </div>
            <button className="btn btn-success">Submit</button>
            <button className="btn btn-danger ml-3">Clear</button>
        </FormCard>
    )
}
