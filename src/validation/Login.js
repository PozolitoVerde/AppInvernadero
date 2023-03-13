import * as yup from 'yup';

export const loginValidationSchena = yup.object().shape({
    email: yup
    .string()
    .email('coloque un email valido')
    .required(' '),
    password: yup
    .string()
    .required(' ')
})