import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Formik, useField } from 'formik';
import { loginValidationSchena } from '../validation/Login';
import StyleInput from '../Styles/StyleInput';

const Main = () => {
    const initialValues = {
        email: '',
        password: ''
     }

     const FormikInputValue = ({ name, ...props}) => {
        const [field, meta, helpers] = useField(name)

        return(
            <>
            <StyleInput
                // error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            /> 
                {meta.error && <Text style={styles.error}>
                    {meta.error}
                </Text>}
            </>
        )
     }

    return(
        <Formik validationSchema={loginValidationSchena}  initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return(
                    <View style={styles.container}>
                                <Image
                                source={require("../../img/cultivecare.png")}
                                style={styles.img}
                                />
                                <Text style={styles.h1}>Iniciar Sesión</Text>
                                
                                {/* <Text style={styles.h2}>Por favor, ingrese sus datos para acceder</Text> */}
                                <View style={styles.containerIn}>
                                    <Text style={styles.p}>Email</Text>
                                    <FormikInputValue
                                        name='email'
                                        placeholder='Ingresa tu correo'
                                        placeholderTextColor="grey"
                                        
                                        
                                    />
                                    <Text style={styles.p}>Password</Text>
                                    <FormikInputValue
                                        name='password'
                                        placeholder='Ingresa tu contraseña'
                                        placeholderTextColor="grey" 
                                        secureTextEntry={true}
                                        
                                        
                                        />
                                </View>
                                <TouchableOpacity
                                    style={styles.Btn}
                                    onPress={handleSubmit}
                                    >
                                        <Text style={styles.Btntxt}>Entrar</Text>
                                    </TouchableOpacity>
                            
                                <View
                                style={styles.containerDown}
                                >
                                    <Text
                                        style={styles.h2}
                                    >
                                        Olvidaste tu contraseña?
                                    </Text>
                                    <TouchableOpacity>
                                        <Text
                                            style={styles.registrate}
                                        >
                                            Registrarse
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                );
            }}
        
        </Formik>
    );
}

export default Main;

const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
        marginTop: 0
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }, 
    containerIn:{
        width: '80%',
        
    },
    containerDown:{
        
        flexDirection: 'row',
        width: '80%',
        marginTop: 40 
    
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    h2: {
        fontSize: 17,
        color: 'grey'
    },
    p:{
        color: 'green',
        alignSelf: 'baseline',
        marginTop: 30,
        marginBottom: 5,
        fontWeight: 700
    },
    registrate: {
        color: 'green',
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 40
    },
    // Ipt:{
    //     padding: 10,
    //     width: '100%',
    //     paddingStart: 0,
        
    // },
    Btn:{
        width: '80%',
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginTop: 25
    },
    Btntxt:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18

    },
    img:{
        width: 256,
        height: 160,
        marginBottom: 30
    }

    

    
})