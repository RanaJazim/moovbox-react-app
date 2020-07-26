import React from 'react'
import * as Yup from 'yup';
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';

export default function LoginScreen() {
    const handleSubmitForm = async (data) => {
        console.log(data);
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

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, "Too short. Min length is 8 character")
        .required("Required"),
});