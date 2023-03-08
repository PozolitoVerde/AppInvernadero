import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Main = () => {
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
                <TextInput
                    style={styles.Ipt}                
                    placeholder='Ingresa tu correo'
                />
                <Text style={styles.p}>Password</Text>
                <TextInput
                    style={styles.Ipt}
                    placeholder='Ingresa tu contraseña'
                    secureTextEntry={true}
                    />
            </View>
            <TouchableOpacity
                style={styles.Btn}
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
}

export default Main;

const styles = StyleSheet.create({
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
        marginBottom: 5
    },
    registrate: {
        color: 'green',
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 40
    },
    Ipt:{
        padding: 10,
        width: '100%',
        paddingStart: 0,
        
    },
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