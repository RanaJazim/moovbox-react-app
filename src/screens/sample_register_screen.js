import React, { useState } from 'react'
import { AppForm, AppInput, SubmitButton, FormCard } from '../components/form';
import { registerSchema } from '../utils/schemas_validation';
import userApi from '../services/user_srevice';
import useApi from '../hooks/use_api';
import ShowOrHideErrors from '../components/show_or_hide_errors';
import Errors from '../components/errors';
import SwitchComponent from '../components/switch_component';
import PushNotification from '../components/push_notification';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SampleRegisterScreen() {
    const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const [data, setData] = useState([]);
    // const [error, setError] = useState({});

    const handleSubmitForm = async (formData) => {
        setIsLoading(true);

        try {
            await userApi.register(formData);
            toast.success("Done");
            setIsLoading(false);
        } catch (err) {
            toast.error("Something wrong");
            setIsLoading(false);            
        }
    }

    return (
        <>
            <ToastContainer />
            <FormCard title="Sample Register">
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
