import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/route';

const AppProvider = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
AppRegistry.registerComponent(appName, () => AppProvider);
