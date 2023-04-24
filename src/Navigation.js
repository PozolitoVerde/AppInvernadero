import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 




//Screens

import Dia from './components/mediaDia';
 import Medicion from './components/Medidores';
 import Login from './components/Login';
// import Registro from './components/Registro';



const Tab = createBottomTabNavigator();

function MyTabs (){
  return(
      <Tab.Navigator
      initialRouteName='Medidores'
        screenOptions={{
          tabBarActiveTintColor: 'green',
          headerShown: false
        }}
        
      >
        <Tab.Screen
         name="Medidores" 
        component={ Medicion }
         options= {{
          tabBarLabel: 'Medidores',
          tabBarIcon: ({ color, size}) => (
            <FontAwesome name="tachometer" size={size} color={color} />
          ),
          
         }}
         
          />

          <Tab.Screen
         name="Media" 
        component={Dia}
         options= {{
          tabBarLabel: 'Media Del Dia',
          tabBarIcon: ({ color, size}) => (
          <AntDesign name="linechart" size={24} color={color} />            ),
          
         }}
         />
         <Tab.Screen
         name="Salida" 
        component={Login}
         options= {{
          tabBarLabel: 'Media Del Dia',
          tabBarIcon: ({ color, size}) => (
          <Ionicons name="exit" size={24} color={color} />          ),
          
         }}
         />
        
         
         
        
      </Tab.Navigator>
      
  );
}

export default function Navigation() {
  return (
  
    <NavigationContainer
    independent={true}
    >
      <MyTabs/>
    </NavigationContainer>
      
      
      
    
    
  );
}


