import * as yup from 'yup';

export const SignValidationSchena = yup.object().shape({
    email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be at most 255 characters'),
    
    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be at most 50 characters')
    ,
    // fechaNacimiento: yup
    // .date()
    // .required('Ingrese una fecha de nacimiento')
    // .max( new Date(), 'La fecha de nacimiento no puede ser en el futuro')
})