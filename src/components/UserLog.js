import React from 'react';
import {Text, View} from 'react-native';
const UserLog = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>Log Screen</Text>
    </View>
  );
};
export default UserLog;
