import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput,IconButton,useTheme } from 'react-native-paper';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDarkMode, toggleAppMode } from '../../redux/reducers/appSlice';
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications";
import { loginUser } from '../../services/apiMethods';
import { assignToLoginState, assignToLoginToken } from '../../redux/reducers/userSlice';

const SignUpScreen = () => {
  const navi=useNavigation()
  const theme = useTheme();
  const dispatch = useDispatch();
  const appMode = useSelector(selectIsDarkMode);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    const toast=useToast()


  const handleThemeChange = () => {
    dispatch(toggleAppMode(!appMode));
  };

    const handleTextChange = (inputText) => {
    setfullName(inputText);
   
  }
  const goToSignUp=()=>{
    navi.navigate('SignUp')

  }

  const handleLogin=async()=>{
     if(!email||!password){
      
  return    toast.show("please fill all the fields",{
        type:"warning",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
      // setDialogVisible(true)
      // console.log(fullName,email,password,mobile)
    }

       // console.log("object",email)
   const response=await loginUser({email,password})
   console.log(response)
      if(response?.errors?.length>0){
      return   toast.show(response?.errors[0]?.msg,{
        type:"warning",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
    }
     if(response.status==="failed"){
          // console.log("object",email)
      return   toast.show(response?.message,{
        type:"warning",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
    }

    if(response.status==="success"){
          // console.log("object",email)
         toast.show(response?.message,{
        type:"success",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
    }
    dispatch(assignToLoginToken(response?.token))
    dispatch(assignToLoginState(true))
    
 
    
  }



  return (
    <View style={{ flex: 1, backgroundColor: '#fff' 
    }}>
      <View
        style={{
          flex: 1,
          marginVertical: responsiveScreenHeight(5),
          marginHorizontal: responsiveScreenWidth(5),
          flexDirection:"row",
         justifyContent:"center",alignItems:"center"
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: responsiveScreenHeight(1),
              marginVertical:responsiveScreenHeight(3)
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontStyle: 'normal',
                fontWeight: '800',
                fontStyle: 'italic',
                color: theme.colors.text,
              }}
            >
              Welcome Back !
            </Text>
            <Text
              style={{
                width: responsiveScreenWidth(70),
                fontStyle: 'italic',
                color: theme.colors.text,
                lineHeight: responsiveScreenHeight(2.5),
                textAlign: 'center',
              }}
            >
              Please Sign In to continue
            </Text>
          </View>

          {/* START FOR ALL INPUT BOXES */}
          <View>
      
            {/* EMAIL */}
              <View>
              
            <TextInput
          left={<TextInput.Icon icon="email" color={theme.colors.iconColor} />} 
            placeholder='Email'
            
            outlineStyle={{elevation:responsiveScreenHeight(1),borderRadius:10,
            borderColor:theme.colors.primary}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primary,
       backgroundColor: appMode ? 'white' : 'white', // Use a conditional expression
           }}
              label="Email"
              mode="outlined"
              theme={{
                colors: {
                  primary: theme.colors.primary, // primary color
                   underlineColor: 'white',
                },
              }}
              value={email}
              onChangeText={(p)=>setEmail(p)}
            />

            </View>

       

                  {/* PASSWORD */}
         <View>
              
            <TextInput
          left={<TextInput.Icon icon="lock" color={theme.colors.iconColor} />} 
          right={<TextInput.Icon icon="eye" color={theme.colors.iconColor} />} 
            placeholder='Password'
            
            outlineStyle={{elevation:responsiveScreenHeight(1),borderRadius:10,
            borderColor:theme.colors.primary}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primary,
       backgroundColor: appMode ? 'white' : 'white', // Use a conditional expression
           }}
              label="Password"
              mode="outlined"
              theme={{
                colors: {
                  primary: theme.colors.primary, // primary color
                   underlineColor: 'white',
                },
              }}
              value={password}
              onChangeText={(p)=>setPassword(p)}
            />

         

          </View>

          {/* FORGOT PASSWORD */}
          <View style={{flexDirection:"row",justifyContent:"space-between",
        alignItems:"center",marginVertical:responsiveScreenHeight(.5)}}>
    
             <Text></Text>
            <TouchableOpacity>
              <Text style={{color:theme.colors.primary,
              fontSize:responsiveScreenFontSize(1.7),
              fontWeight:"700",
              fontStyle:"italic"}}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

            <View style={{marginHorizontal:responsiveScreenWidth(5),
            marginTop:responsiveScreenHeight(1),
            flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:theme.colors.text,
              fontSize:responsiveScreenFontSize(1.7),
              lineHeight:responsiveScreenHeight(2.7)
              }}>By creating an account and logged in. You agree to 
                our
                <Text style={{color:theme.colors.primary,
                textAlign:"center",
                fontSize:responsiveScreenFontSize(1.9),fontWeight:"bold",
                fontStyle:"italic"}}> Terms & conditions </Text> and <Text style={{color:theme.colors.primary,
                fontSize:responsiveScreenFontSize(1.7),fontWeight:"bold",
                fontStyle:"italic",textAlign:"center",
                }}> Privacy Policy</Text>
              </Text>
            </View>



            <TouchableOpacity
              style={{
                margin: 20,
                backgroundColor: theme.colors.primary,
                paddingHorizontal:responsiveScreenWidth(4),
                paddingVertical:responsiveScreenHeight(1.4),
                borderRadius:8
              }}
              onPress={handleLogin}
            >
              <Text style={{color:theme.colors.primaryText,
              textAlign:"center"}}>Login</Text>
            </TouchableOpacity>
          </View>
       






        </ScrollView>
      </View>
      {/* BOTTOM CONTAINER */}
      <View style={{backgroundColor:"white",padding:15,
      elevation:20,
    flexDirection:"row",justifyContent:"center",alignItems:"center",
    position:"absolute",bottom:0,

    left:0,right:0}}>
        <Text style={{color:theme.colors.text,
        fontStyle:"italic"}}>Don`t` have an Account ? 
        
        </Text>
        <TouchableOpacity
        onPress={goToSignUp}>
          <Text style={{color:theme.colors.primary,
        fontSize:responsiveScreenFontSize(2.1),

        fontWeight:"700"}}> SignUp </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom:responsiveScreenHeight(2.2),
  },
});

export default SignUpScreen;
