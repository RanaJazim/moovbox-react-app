import React from 'react'
import * as Yup from 'yup';
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';


export default function LoginScreen() {
    return (
        <FormCard
            title="Login"
        >
            <AppForm
                initialValues={{ email: '', password: '' }}
                validations={loginSchema}
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
            <SubmitButton title="Login" />
        </FormCard>
    )
}

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, "Too short. Min length is 8 character")
        .required("Required"),
});