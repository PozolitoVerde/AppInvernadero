import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox } from "react-native-web";



const Registro = () =>{
    const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Registro</Text>
            <View style={styles.containerIn}>
            <Text
                style={styles.p}
            >
                Correo electrónico
            </Text>
            <TextInput
                style={styles.Ipt}
                placeholder='Ingresa tu correo'
                placeholderTextColor="grey" 
            />
             <Text
                style={styles.p}
            >
                Nombre(s)
            </Text>
            <TextInput
                style={styles.Ipt}
                placeholder='Ingresa tu nombre'
                placeholderTextColor="grey" 
            />
             <Text
                style={styles.p}
                
            >
                Apellidos
            </Text>
            <TextInput
                style={styles.Ipt}
                placeholder='Ingresa tus apellidos'
                placeholderTextColor="grey" 
            />
             <Text
                style={styles.p}
            >
                Contraseña
            </Text>
            <TextInput
                style={styles.Ipt}
                placeholder='Ingresa tu contraseña'
                placeholderTextColor="grey" 
                secureTextEntry={true}
            />
             <Text
                style={styles.p}
            >
                Fecha de nacimiento
            </Text>
            <TextInput
                style={styles.Ipt}
                placeholder='Ingresa tu fecha de nacimiento'
                placeholderTextColor="grey" 
            />
            </View>
            <View style={styles.checkboxContainer}>
            <Text style = {styles.p2}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                tintColors={{ true: 'green', false: 'white' }}
            />
                Estoy de acuerdo con los <TouchableOpacity style={styles.ter}>Términos de servicio.</TouchableOpacity>
            </Text>
            
            </View>
            <TouchableOpacity
                style={styles.Btn}
            >
                <Text style={styles.Btntxt}>Registrarse</Text>
            </TouchableOpacity>
            <Text>Ya tienes una cuenta? <TouchableOpacity style={styles.ini}>Iniciar sesión</TouchableOpacity></Text>
        </View>
    );
}

export default Registro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    Ipt:{
        padding: 10,
        width: '100%',
        paddingStart: 0,
        
    },
    containerIn:{
        width: '80%',
        
    },
    p:{
        color: 'green',
        alignSelf: 'baseline',
        marginTop: 30,
        marginBottom: 10,
        fontWeight: 700
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 10
    },
    p2: {
        margin: 8
    },
    Btn:{
        width: '80%',
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20
    },
    Btntxt:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18

    },
    ter:{
        color: 'green'
    },
    ini:{
        color: 'green',
        fontWeight: 700
    }
})