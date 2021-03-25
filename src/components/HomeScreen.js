import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: ''
  },
  textWrapper: {
    fontSize: 30,
  },
  textWrapper2: {
    color: 'green',
    fontSize: 30,
  }
});
const HomeScreen = ({navigation}) => {
  const counter = useSelector(state => state.count.count);
  console.log('counter', counter);
  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper}>Total Expense</Text>
      <Text style={styles.textWrapper2}>{counter}</Text>
    </View>
  );
};
export default HomeScreen;
