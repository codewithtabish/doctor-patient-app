import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import CustomDialog from '../../components/CustomDialog'
import LottieView from 'lottie-react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
 


  return (
    <View>
      <CustomDialog/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})