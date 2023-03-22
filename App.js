import React from "react";
import Main from "./src/components/Main";
import Registro from "./src/components/Registro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Medicion from "./src/components/Medidores";
// import Navigation from "./src/Navigation";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "Home"
        screenOptions = {{
          headerShown: false
        }}
      >
          <Stack.Screen
            name = 'Home'
            component = { Main }
          />

          <Stack.Screen
            name = 'Registro'
            component = { Registro }
          />

          <Stack.Screen
            name = 'Medidores'
            component = { Medicion }
          />
          
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


