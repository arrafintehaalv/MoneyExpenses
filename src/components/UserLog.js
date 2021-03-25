import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  logScreenHeader: {
    alignItems: 'center',
  },
  textLogScreen: {
    fontSize: 30,
    color: 'green',
  },
});
const UserLog = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logScreenHeader}>
        <Text style={styles.textLogScreen}>Log Screen</Text>
      </View>
    </View>
  );
};
export default UserLog;
