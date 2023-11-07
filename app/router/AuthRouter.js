import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../auth/Signup/SignUpScreen';
import LoginScreen from '../auth/login/LoginScreen';
import OTPScreen from '../auth/otp/OTPScreen';



const Stack = createNativeStackNavigator();

const AuthRouter = () => {
  return (
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen}
        options={{headerShown:false}}
         />
        <Stack.Screen name="Login" component={LoginScreen} 
             options={{headerShown:false}}/>
        <Stack.Screen name="OTP" component={OTPScreen} 
             options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AuthRouter

const styles = StyleSheet.create({})