import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



//Screens
import Main from './components/Main';
import Medicion from './components/Medidores';
import Registro from './components/Registro';



const Tab = createBottomTabNavigator();

function MyTabs (){
  return(
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          
        }}
        
      >
        <Tab.Screen
         name=" " 
         component={Main}
         options= {{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          
         }}
         
          />
          <Tab.Screen
         name="  " 
         component={Registro}
         options= {{
          tabBarLabel: 'Registro',
          tabBarIcon: ({ color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          
         }}
         
          />
          <Tab.Screen
         name="Medidores" 
         component={Medicion}
         options= {{
          tabBarLabel: 'Medidores',
          tabBarIcon: ({ color, size}) => (
            <FontAwesome name="tachometer" size={size} color={color} />
          ),
          
         }}
         
          />
        
      </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
  
    <NavigationContainer >
      
      <MyTabs/>
      
    </NavigationContainer>
    
  );
}


