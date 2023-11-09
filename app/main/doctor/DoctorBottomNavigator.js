import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorHomeScreen from './doctorhome/DoctorHomeScreen';

const Stack = createNativeStackNavigator();

function DoctorBottomNavigatir() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='DoctorHome' component={DoctorHomeScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default DoctorBottomNavigatir

