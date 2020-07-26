import React from 'react'
import * as Yup from 'yup';
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';

export default function RegisterScreen() {
    const handleSubmitForm = async (data) => {
        console.log(data);
    }

    return (
        <FormCard title="Register">
            <AppForm
                initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
                validations={registerSchema}
                onSubmitForm={handleSubmitForm}
                SubmitComponent={<SubmitButton title="Register" />}
            >
                <AppInput
                    label="Username"
                    name="name"
                    type="text"
                />
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
                <AppInput
                    label="Confirm Password"
                    name="password_confirmation"
                    type="password"
                />
            </AppForm>
        </FormCard>
    )
}

const registerSchema = Yup.object().shape({
    name: Yup.string()
        .min(8, "Min Length is 8")
        .max(20, "Max Length is 20")
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, "Too short. Min length is 8 character")
        .required("Required"),
});