import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main'
import Error from '../screens/Error';
const Stack = createNativeStackNavigator();


function MainNavigator() {
    return(
      
        <Stack.Navigator
            initialRoute={{Splash}}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <Stack.Screen name="Splash"  component = {Splash}/>
            <Stack.Screen name="Main"  component = {Main}/>
            <Stack.Screen name ="Error" component = {Error}/>
        </Stack.Navigator>
    
    );
    
}

export default MainNavigator ;