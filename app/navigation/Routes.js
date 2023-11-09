import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainRouter from '../router/MainRouter'
import AuthRouter from '../router/AuthRouter'
import { useDispatch, useSelector } from 'react-redux'
import { assignToLoginUserData, selectIsLoginFlow } from '../redux/reducers/userSlice'
import { getLoginUserData } from '../services/apiMethods'

const Routes = () => {
     const {  isLogin } = useSelector((state) => state.user);
     const dispatch=useDispatch()
 
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDc2NjMxNTVmYzM3Mzk5YTNmMWRlZCIsImlhdCI6MTY5OTQ2Nzk5NX0.s1IIioL8wF2Mk2_vSq0Ex6vby-lFtWc5QONB00HMd6k"

    const getLoginData=async()=>{
        const header={
        'Authorization': `Bearer ${token}`,
        }
        const response=await getLoginUserData(header)
        console.log(response)
        if(response.status==="success"){

            dispatch(assignToLoginUserData(response?.user))
        }

    }
    useEffect(() => {
        getLoginData()

      
    }, [])


    

    
    return <>{isLogin?<MainRouter/>:<AuthRouter/>}</>
    // return <>{selectIsLoginFlow?<Text>LOGIN HA</Text>:<Text>LOGIN NHI HA</Text>}</>
}

export default Routes

const styles = StyleSheet.create({})