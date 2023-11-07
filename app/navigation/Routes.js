import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainRouter from '../router/MainRouter'
import AuthRouter from '../router/AuthRouter'
import { useSelector } from 'react-redux'
import { selectIsLoginFlow } from '../redux/reducers/userSlice'

const Routes = () => {
    // const [isLogin, setisLogin] = useState(false)
    // const isLogin=useSelector(selectIsLoginFlow)
     const {  isLogin } = useSelector((state) => state.user);
    //  const   {isLogin}  = useSelector((state)=>state.app.user);
    // const [isLogin, setisLogib] = useState(false)
    // const [isLogin, setisLogib] = useState(false)


    // alert(dummyData)
    // return


    

    
    return <>{isLogin?<MainRouter/>:<AuthRouter/>}</>
    // return <>{selectIsLoginFlow?<Text>LOGIN HA</Text>:<Text>LOGIN NHI HA</Text>}</>
}

export default Routes

const styles = StyleSheet.create({})