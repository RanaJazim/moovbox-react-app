import React from 'react'
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';
import { registerSchema } from '../utils/schemas_validation';
import userApi from '../services/user_srevice';
import useApi from '../hooks/use_api';
import ShowOrHideErrors from '../components/show_or_hide_errors';
import Errors from '../components/errors';
import SwitchComponent from '../components/switch_component';
import { ToastContainer } from 'react-toastify';


export default function RegisterScreen() {
    const {
        isError,
        error,
        isLoading,
        request: register
    } = useApi(userApi.register);

    const handleSubmitForm = async (formData) => {
        await register({ 
            formData, 
            isShowSuccessMsg: true, 
            successMsg: "Successfully register the user" 
        });
    }

    return (
        <>
            <ShowOrHideErrors
                className="mt-2"
                error={isError}
                Errors={<Errors error={error} />}
            />
            <FormCard title="Register">
                <AppForm
                    initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
                    validations={registerSchema}
                    onSubmitForm={handleSubmitForm}
                    SubmitComponent={
                        <SwitchComponent
                            isLoading={isLoading}
                            Render={<SubmitButton title="Register" />}
                        />
                    }
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
        </>
    )
}
