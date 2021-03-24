import React from 'react';
import {Text, View} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('UserLog')}>Home Screen</Text>
    </View>
  );
};
export default HomeScreen;
