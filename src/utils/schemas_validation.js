import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, "Too short. Min length is 8 character")
        .required("Required"),
});

export const registerSchema = Yup.object().shape({
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
    password_confirmation: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        ).required(),
    })
});