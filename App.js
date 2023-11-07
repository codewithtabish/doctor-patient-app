import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './app/navigation/AppProvider';
import { ThemeProvider } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications'

import { store } from './app/redux/store';

export default function App() {
 
  return (
    <Provider store={store}>
      <ToastProvider>

    <AppProvider/>
      </ToastProvider>

  </Provider>
  )
  
     
}

