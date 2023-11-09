import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MedicineHomeScreen from './medicineHome/MedicineHomeScreen';

const Stack = createNativeStackNavigator();

function MedicineBottomNavigatir() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MedicineHome' component={MedicineHomeScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MedicineBottomNavigatir

