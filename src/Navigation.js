import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 




//Screens

import Dia from './components/mediaDia';
 import Medicion from './components/Medidores';
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
         name="Registro" 
        component={Dia}
         options= {{
          tabBarLabel: 'Media Del Dia',
          tabBarIcon: ({ color, size}) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
          
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


