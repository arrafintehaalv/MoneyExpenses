import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/route';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const AppProvider = () => (
  <NavigationContainer>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </NavigationContainer>
);
AppRegistry.registerComponent(appName, () => AppProvider);
