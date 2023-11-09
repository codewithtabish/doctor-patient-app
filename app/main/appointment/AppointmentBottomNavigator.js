import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentHomeScrreen from './appointmentHome/AppointmentHomeScrreen';

const Stack = createNativeStackNavigator();

function AppointmentBottomNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='AppointmentHome' component={AppointmentHomeScrreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default AppointmentBottomNavigator

