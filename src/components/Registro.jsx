import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";





const Registro = () => {

    const [isChecked, setChecked] = useState(false);

    return(
        <View style={styles.Container}>
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
                 Nombres
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
                <Checkbox style={styles.checkbox} value={isChecked} color="green" onValueChange={setChecked}/>
                <Text style = {styles.p2}>Estoy de acuerdo con los </Text>
                <TouchableOpacity style={styles.terbtn}>
                 <Text style={styles.ter}>Términos de servicio.</Text>
                </TouchableOpacity></View>
            
                <TouchableOpacity
                 style={styles.Btn}
             >
                 <Text style={styles.Btntxt}>Registrarse</Text>
             </TouchableOpacity>
             
             <View style={styles.checkboxContainer}>
                 <Text>Ya tienes una cuenta? </Text>
                 <TouchableOpacity>
                     <Text style={styles.ini}>Iniciar sesión</Text>
                 </TouchableOpacity>
             </View>
             </View>
        
    );
}

export default Registro

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
       
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
        marginTop: 25,
        marginBottom: 5,
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
        marginLeft: 5
    },
    Btn:{
        width: '80%',
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        margin: 5
        
    },
    Btntxt:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        

    },
    ter:{
        color: 'green',
        paddingStart: 0
    },
    terbtn:{
        alignSelf: 'center'
    },
    ini:{
        color: 'green',
        fontWeight: 700
    }
})