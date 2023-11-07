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
import { selectFavArray, selectIsDarkMode, toggleAppMode } from '../../redux/reducers/appSlice';
import { useNavigation } from '@react-navigation/native';
import { signupUser } from '../../services/apiMethods';
import { BaseURL } from '../../services/helper';
import CustomDialog from '../../components/CustomDialog';
import { useToast } from "react-native-toast-notifications";
import { isLoginFlow } from '../../redux/reducers/userSlice';

const SignUpScreen = () => {
  const navi=useNavigation()
  const theme = useTheme();
  const dispatch = useDispatch();
  const appMode = useSelector(selectIsDarkMode);
  const [fullName, setfullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [mobile, setMobile] = useState()
  const [isDialogVisible, setDialogVisible] = useState(false)
  const [errorTtitle, setErrorTitle] = useState()
  const [errorSubtitle, setErrorSubtitle] = useState()
  const [iconName, setIconName] = useState()
  const toast=useToast()
   const favArray=useSelector(selectFavArray)

  const signUpUser = async() => {

  
    if(!fullName||!email||!password||!mobile){
      setErrorTitle("fields Error")
      setErrorSubtitle("please fill all the fields")
      setIconName("exclamationcircle")
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
   const response=await signupUser({fullName,email,mobile,password})
      if(response?.errors?.length>0){
      return   toast.show(response?.errors[0]?.msg,{
        type:"warning",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
    }
    if(response?.status==="failed"){
    return  toast.show(response.message,{
         type:"warning",
        placement: "top",
         duration: 4000,
        offset: 30,
       animationType: "slide-in | zoom-in",
    

      })
    }
    if(response?.status==="success"){
    toast.show(response.message,{
         type:"success",
        placement: "top",
         duration: 4000,
        offset: 30,
       animationType: "slide-in | zoom-in",
    

      })
      navi.navigate("OTP",{
        email:email
      })
      return

    }
     
    
    console.log(response)
  
  }


  
  const goToLogin=()=>{
    navi.navigate('Login')

  }



  return (
   <>
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* {isLogin && <Text>THIS IS ONE OF THE BEST DATA</Text>} */}
      <Text>{favArray.length}</Text>
      <View
        style={{
          flex: 1,
          marginVertical: responsiveScreenHeight(5),
          marginHorizontal: responsiveScreenWidth(5),
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
              SIGN UP {appMode}
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
              Please Sign Up using your personal details to continue
            </Text>
          </View>

          {/* START FOR ALL INPUT BOXES */}
          <View>
            {/* FULL NAME */}
            <View>
              
            <TextInput
          left={<TextInput.Icon icon="account-circle" color={theme.colors.iconColor} />} 
            placeholder='FullName'
            
            outlineStyle={{elevation:responsiveScreenHeight(1),borderRadius:10,
            borderColor:theme.colors.primary}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primary,
       backgroundColor: appMode ? 'white' : 'white', // Use a conditional expression
           }}
              label="FullName"
              mode="outlined"
              theme={{
                colors: {
                  primary: theme.colors.primary, // primary color
                   underlineColor: 'white',
                },
              }}
              value={fullName}
                  onChangeText={(p)=>setfullName(p)}
              
            />

            </View>

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

         {/* PHONE */}
          <View>
              
            <TextInput
          left={<TextInput.Icon icon="phone" color={theme.colors.iconColor} />} 
            placeholder='Phone'
            outlineStyle={{elevation:responsiveScreenHeight(1),borderRadius:10,
            borderColor:theme.colors.primary
          }}

              style={{
         ...styles.input,
         borderColor: theme.colors.primary,
       backgroundColor: appMode ? 'white' : 'white', // Use a conditional expression
           }}
              label="Phone"
              mode="outlined"
              theme={{
                colors: {
                  primary: theme.colors.primary, // primary color
                   underlineColor: 'white',
                },
              }}
              value={mobile}
              onChangeText={(p)=>setMobile(p)}
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

            <View style={{marginHorizontal:responsiveScreenWidth(5),
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
              onPress={signUpUser}
            >
              <Text style={{color:theme.colors.primaryText,
              textAlign:"center"}}>Submit</Text>
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
        fontStyle:"italic"}}>Already have an Account ? 
      
        </Text>
          <TouchableOpacity
        onPress={goToLogin}>
          <Text style={{color:theme.colors.primary,
        fontSize:responsiveScreenFontSize(2.1),
        fontWeight:"700"}}> SignIn </Text>
        </TouchableOpacity>
      </View>
    </View>
    <CustomDialog isDialogVisible={isDialogVisible} setDialogVisible={setDialogVisible}
    errorTtitle={errorTtitle} errorSubtitle={errorSubtitle}
    iconName={iconName}/>
   </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom:responsiveScreenHeight(2.2),
  },
});

export default SignUpScreen;
