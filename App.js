import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import Board from './Components/Board'
import AddMoney from './Components/AddMoney'
import RemoveMoney from './Components/RemoveMoney'
import Setting from './Components/Setting'
import ThemeChange from './Components/ThemeChange'
import ComptNameChange from './Components/ComptNameChange'
import Historique from './Components/Historique'
import PoucentageChange from './Components/PoucentageChange'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  
import { Provider } from 'react-redux'
import store from './Store/configureStore'

//App

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Board'>
            <Stack.Screen name="Board" component={Board} />
            <Stack.Screen name="AddMoney" component={AddMoney} />
            <Stack.Screen name="RemoveMoney" component={RemoveMoney} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="ThemeChange" component={ThemeChange} />
            <Stack.Screen name="ComptNameChange" component={ComptNameChange} />
            <Stack.Screen name="Historique" component={Historique} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}







