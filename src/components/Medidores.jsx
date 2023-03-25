import React, { useEffect, useState } from 'react';
import  {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Navigation from '../Navigation';
// import {styles} from '../theme/Theme';

 function Medicion() {

  obtenerDato()

  useEffect (()=>{
    

  }, [])

 const [mediciones, setDatos] = useState([])
  
  async function obtenerDato(){
  const res = await fetch("http://172.20.40.186:5000/api/ultimo")
  const dato = await res.json();
  setDatos(dato)
  }
  

  return (
    <View style={styles.cont}>
    <View >
      
      
        <View>
          <Text>Dispositivo:   </Text>
          <Text>Velocidad_viento:   km/h</Text>
          <Text>Temperatura:   C</Text>
        </View>
      
        
       
    </View>
    
    </View>
    
  );
}



export default Medicion


const styles = StyleSheet.create({
  cont:{
    flex: 1
  }
})