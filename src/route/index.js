import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import UserLog from '../components/UserLog';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="UserLog" component={UserLog} />
  </Drawer.Navigator>
);
export default AppNavigator;
