import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../main/MainBottomBar';

const Stack = createNativeStackNavigator();


const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainTabs' component={MyTabs}
        options={{headerShown:false}}/>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default MainRouter

const styles = StyleSheet.create({})