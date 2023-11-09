import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const HomeScreenHeader = () => {
       const {  loginUser } = useSelector((state) => state.user);
  return (
    <View >
      <Text>{loginUser?.fullName}</Text>
    </View>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({})