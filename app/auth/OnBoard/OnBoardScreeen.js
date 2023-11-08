import React, { useEffect, useRef } from 'react';
import { View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useTheme } from 'react-native-paper';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnBoardScreen = () => {
  const animationRef = useRef(null);
  const theme = useTheme();
  const navi=useNavigation()

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
    StatusBar.setBackgroundColor('#4B0082');
  }, [animationRef])

  const handleDone = () => {
    navi.replace("Login")
    
 
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        onSkip={() => StatusBar.setHidden(false)}
        onDone={handleDone}
        showSkip={true}
        showNext={false} // Remove the next button
        bottomBarHighlight={false}
        bottomBarColor={theme.colors.background}
        NextButtonComponent={() => null} // Custom NextButton to replace the default
        DoneButtonComponent={({ ...props }) => (
          <TouchableOpacity onPress={handleDone}>
            <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
              <MaterialIcons name="file-download-done" size={34} color={"red"} />
            </View>
          </TouchableOpacity>
        )}
        DotComponent={({ selected }) => (
          <View
            style={{
              width: 6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor: selected ? 'red' : 'rgba(0, 0, 0, .2)',
              borderRadius: 3,
            }}
          />
        )}
        pages={[
          {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/doctor/one1.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: width }}
                />
              </View>
            ),
            title: (
              <Text style={styles.titleText}>
                Connect with Your Doctor
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Consult and chat with your doctor anytime, anywhere for personalized healthcare.
              </Text>
            ),
          },
          {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/doctor/two.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: '100%' }}
                />
              </View>
            ),
            title: (
              <Text style={styles.titleText}>
                Seamless Communication
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Stay connected with your healthcare providers through secure and easy communication channels.
              </Text>
            ),
          },
          {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/ecom/three.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: '100%' }}
                />
              </View>
            ),
            title: (
              <Text style={styles.titleText}>
                Personalized Healthcare
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Receive personalized and tailored healthcare solutions that suit your unique needs and preferences.
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    paddingVertical: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: 'normal',
    color: '#ADD8E6',
    fontStyle: 'italic',
  },
  subtitleText: {
    width: width * 0.7,
    textAlign: 'center',
    color: 'gray',
    fontStyle: 'italic',
    fontSize: responsiveScreenFontSize(1.7),
  },
});

export default OnBoardScreen;
