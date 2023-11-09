import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Ionicons,MaterialCommunityIcons ,AntDesign,Fontisto,Zocial} from '@expo/vector-icons'; // Import Ionicons
import HomeMainBottomNavigator from './home/HomeBottomNavigator';
import DoctorBottomNavigatir from './doctor/DoctorBottomNavigator';
import AppointmentBottomNavigator from './appointment/AppointmentBottomNavigator';
import MedicineBottomNavigatir from './medicine/MedicineBottomNavigator';
import MoreBottomNavigatir from './more/MoreBottomNavigator';
import { useTheme } from 'react-native-paper';

function MyTabs() {
    const theme=useTheme()
    console.log("theme.colors.primary",theme.colors.primary)
    const [currentColor, setcurrentColor] = useState(theme.colors.primary)
    // return <Text style={{color:theme.colors.error}}>THIS IS DATA</Text>
  return (
    <Tab.Navigator
    screenOptions={{
    tabBarInactiveTintColor: theme.colors.cardText,
    tabBarActiveTintColor: `${theme.colors.primary}`,
    tabBarStyle: {
      position: 'absolute',
      borderTopColor: 'rgba(0, 0, 0, .2)',
    },
  }}


    >

    <Tab.Screen name="HomeMain" component={HomeMainBottomNavigator}
     options={{
        headerShown:false,
        tabBarLabel:"Home",
        tabBarIcon:({focused})=>focused?
        <AntDesign name="home" size={24} style={{color:theme.colors.primary}} />:
        <AntDesign name="home" size={24} color={theme.colors.cardText} />

        }}

    />
      
       
        <Tab.Screen name='DoctorMain' component={DoctorBottomNavigatir}
        options={{
        headerShown:false,
        tabBarLabel:"Doctors",
        tabBarIcon:({focused})=>focused?
        <AntDesign name="calendar" size={24} color={theme.colors.primary} />:
        <AntDesign name="calendar" size={24} color={theme.colors.cardText} />

        }}
        />
        <Tab.Screen name='AppointmentMain' component={AppointmentBottomNavigator}
           options={{
        headerShown:false,
        tabBarLabel:"Appointment",
        tabBarIcon:({focused})=>focused?
        <Zocial name="meetup" size={22} color={theme.colors.primary} />:
        <Zocial name="meetup" size={22} color={theme.colors.cardText} />

        }}
        />
        <Tab.Screen name='MedicineMain' component={MedicineBottomNavigatir}
          options={{
        headerShown:false,
        tabBarLabel:"Medicine",
        tabBarIcon:({focused})=>focused?
        <AntDesign name="medicinebox" size={24} color={theme.colors.primary} />:
        <AntDesign name="medicinebox" size={24} color={theme.colors.cardText} />

        }}
        />
        <Tab.Screen name='MoreMain' component={MoreBottomNavigatir}
           options={{
        headerShown:false,
        tabBarLabel:"More",
        tabBarIcon:({focused})=>focused?
        <Ionicons name="person-outline" size={24} color={theme.colors.primary} />:
        <Ionicons name="person-outline" size={24} color={theme.colors.cardText} />

        }}
        />
    
    </Tab.Navigator>
  );
}

export default MyTabs

