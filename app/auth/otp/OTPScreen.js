import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { verifyUserMethod } from '../../services/apiMethods';
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from 'react-redux';
import { assignToLoginState, assignToLoginToken } from '../../redux/reducers/userSlice';
import { assignToDialouge } from '../../redux/reducers/appSlice';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedInput, setFocusedInput] = useState(0);
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route?.params;
  const toast = useToast();
  const [showContinueBtn, setShowContinueButton] = useState(false);
  const dispatch=useDispatch()


  useEffect(() => {
    setTimeout(() => {
      refs[0]?.focus();
    }, 500);
  }, []);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value !== '' && index < 3) {
      setFocusedInput(index + 1);
      refs[index + 1]?.focus(); // Focus on the next input
    } else if (index === 3 && value !== '') {
      setShowContinueButton(true);
      // navigation.navigate('N');
    } else {
      setShowContinueButton(false);
    }
  };

  const handleSubmit = async () => {
    const enteredOTP = otp.join('');
    if (enteredOTP === "") {
      return toast.show("Please enter your OTP", {
        type: "warning",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in | zoom-in",
      });
    }
    
    const response = await verifyUserMethod({ fourCode: enteredOTP, email });
    console.log("RESPONSE HERE IS",response);
    dispatch(assignToDialouge(true))
    setTimeout(() => {
       if (response.status === "failed") {
      toast.show(response.message, {
        type: "error",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in | zoom-in",
      });
      dispatch(assignToDialouge(false))
    }

    if(response.status==="success"){
         toast.show(response.message, {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in | zoom-in",
      });
      dispatch(assignToDialouge(false))
      dispatch(assignToLoginState(true))
      dispatch(assignToLoginToken(response?.token))
      return
      
    }
      
    }, 5000);

   
  }




  const refs = Array(4)
    .fill()
    .map(() => React.createRef());

  return (
    <>
        <StatusBar backgroundColor={theme.colors.primary} barStyle={theme.colors.text}/>
       <View style={styles.container}>
      <View style={{ width: responsiveScreenWidth(80), flexDirection: 'column', gap: responsiveScreenHeight(1), justifyContent: 'center' }}>
        <Text style={{ color: theme.colors.text, fontSize: responsiveScreenFontSize(2.9), fontWeight: '800', textAlign: 'center' }}>Verification !</Text>
        <Text style={{ color: theme.colors.text, textAlign: 'center', color: 'gray' }}>
          Please enter the verification code. We have just sent it to your email.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (refs[index] = input)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOTPChange(index, value)}
            onSubmitEditing={() => index === 3 && handleSubmit()}
            returnKeyType={index === 3 ? 'done' : 'next'}
            blurOnSubmit={false}
            autoFocus={focusedInput === index}
          />
        ))}
      </View>

      {/* {showContinueBtn && ( */}
        <TouchableOpacity
         onPress={handleSubmit}
          style={{
            backgroundColor: theme.colors.primary,
            padding: 13,
            width: responsiveScreenWidth(80),
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: theme?.colors?.surface, textAlign: "center" }}>Continue</Text>
        </TouchableOpacity>
      {/* )} */}

    </View>
    </>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    marginVertical: responsiveScreenHeight(3),
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
  },
});

export default OTPScreen;
