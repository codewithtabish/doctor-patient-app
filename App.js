import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './app/navigation/AppProvider';
import { ThemeProvider } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications'

import { store } from './app/redux/store';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default function App() {
 // Disable yellow box warnings
  //  console.disableYellowBox = true;
  console.disableYellowBox = true;


  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

  

  return (
    <Provider store={store}>
      <ToastProvider>

    <AppProvider/>
      </ToastProvider>

  </Provider>
  )
  
     
}

