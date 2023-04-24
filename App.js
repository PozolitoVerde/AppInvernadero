import React from "react";
import Registro from "./src/components/Registro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Appuser from "./src/components/appUser";
import Login from "./src/components/Login";
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
            component = { Login }
          />

          <Stack.Screen
            name = 'Registro'
            component = { Registro }
          />

          <Stack.Screen
            name = 'Inicio'
            component={ Appuser }
          />
          
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


