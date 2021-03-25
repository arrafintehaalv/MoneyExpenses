import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/route';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

const AppProvider = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => AppProvider);
