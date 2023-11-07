import { StyleSheet, StatusBar,Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './Routes'
import { selectIsDarkMode } from '../redux/reducers/appSlice'
import { MD3LightTheme ,MD3DarkTheme, PaperProvider, useTheme, ThemeProvider } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { customDarkColors, customLightColors } from '../helper/themeColors';


const AppProvider = () => {
    const isDarkMode=useSelector(selectIsDarkMode)


   const lightSchemes={
  ...MD3LightTheme,
  colors:customLightColors
}


const darkSchemes={
  ...MD3DarkTheme,
  colors:customDarkColors
}
 

 
  
   const theme=isDarkMode?darkSchemes:lightSchemes

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle={theme.colors.text}/>
    
      <Routes/>
     </ThemeProvider>

  )
}

export default AppProvider
