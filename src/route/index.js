import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import UserLog from '../components/UserLog';
import AddExpense from '../components/AddExpense';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="UserLog" component={UserLog} />
    <Drawer.Screen name="AddExpense" component={AddExpense} />
  </Drawer.Navigator>
);
export default AppNavigator;
