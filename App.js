import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,//Tiro o cabeçalho
        }}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: null,// Remove a seta de volta
            headerShown: false,//Tiro o cabeçalho
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}