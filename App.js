import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import CustomDrawer from './navigation/CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'
import { Provider } from 'react-redux';
import {store} from './store/store'

const Stack = createStackNavigator()

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })
} 

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if (!fontsLoaded) {
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={console.warn}
    />
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Home' component={CustomDrawer}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
