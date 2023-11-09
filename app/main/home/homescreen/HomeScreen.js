import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeScreenHeader from './components/HomeScreenHeader'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const HomeScreen = () => {
    const navi=useNavigation()
  return (
    <View style={{backgroundColor:"white",flex:1}}>
    <View style={{marginHorizontal:responsiveScreenWidth(5),marginVertical:(3),
    padding:responsiveScreenHeight(0)}}>
    <HomeScreenHeader/>
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})