import React from 'react'
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';
import { loginSchema } from "../utils/schemas_validation";

export default function LoginScreen() {
    const handleSubmitForm = async (values) => {
        console.log(values);
    }

    return (
        <FormCard
            title="Login"
        >
            <AppForm
                initialValues={{ email: '', password: '' }}
                validations={loginSchema}
                onSubmitForm={handleSubmitForm}
                SubmitComponent={<SubmitButton title="Login" />}
            >
                <AppInput
                    label="Email"
                    name="email"
                    type="email"
                />
                <AppInput
                    label="Password"
                    name="password"
                    type="password"
                />
            </AppForm>
        </FormCard>
    )
}
