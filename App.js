
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Homescreen from './screens/home';
import DetailScreen from './screens/details'
export default function App() {
  return (
    <AppContainer/>
  );
}

const appStackNavigator=createStackNavigator(
  {
    home:{
      screen:Homescreen,
      navigationOptions:{
        headerShown:false
      }
    },
    details:{
      screen:DetailScreen
    }
  },
  {initialRootName:'home'}
)
const appContainer=createAppContainer(appStackNavigator);
