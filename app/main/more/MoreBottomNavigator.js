import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreHomeScreen from './moreHome/MoreHomeScreen';

const Stack = createNativeStackNavigator();

function MoreBottomNavigatir() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MoreHome' component={MoreHomeScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MoreBottomNavigatir

