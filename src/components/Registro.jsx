import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox } from "react-native-web";



const Registro = () =>{
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
            />
             <Text
                style={styles.p}
            >
                Nombre(s)
            </Text>
            <TextInput
                style={styles.Ipt}
            />
             <Text
                style={styles.p}
            >
                Apellidos
            </Text>
            <TextInput
                style={styles.Ipt}
            />
             <Text
                style={styles.p}
            >
                Contraseña
            </Text>
            <TextInput
                style={styles.Ipt}
            />
             <Text
                style={styles.p}
            >
                Fecha de nacimiento
            </Text>
            <TextInput
                style={styles.Ipt}
            />
            </View>
            <View>
            <Text>
            <CheckBox
                // value={isSelected}
                // onValueChange={setSelection}
                // style={styles.checkbox}
            />
                Estoy de acuerdo con los <TouchableOpacity>Términos de servicio.</TouchableOpacity>
            </Text>
            </View>
            <TouchableOpacity>
                <Text>Registrarse</Text>
            </TouchableOpacity>
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
        textAlign: 'center'
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
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
        marginBottom: 5
    },
})