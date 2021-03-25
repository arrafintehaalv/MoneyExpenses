import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  logScreenHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  textLogScreen: {
    fontSize: 30,
    color: 'green',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const UserLog = ({navigation}) => {
  const expenseList = useSelector(state => state.count.list);
  const [expenseType, setExpenseType] = useState('');
  const [week, setWeek] = useState('');
  const [month, setMonth] = useState('');
  console.log('exPenseList', expenseList);
  return (
    <View style={styles.container}>
      <View style={styles.logScreenHeader}>
        <Text style={styles.textLogScreen}>User Log</Text>
      </View>
      <View style={styles.searchByCategory}>
        <Text>Search By Category</Text>
        <TextInput
          style={styles.input}
          onChangeText={setExpenseType}
          value={expenseType}
          placeholder="Enter Expense Type"
          keyboardType="default"
        />
      </View>
      <View style={styles.searchByCategory}>
        <Text>Search By Week</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeek}
          value={week}
          placeholder="Enter Expense Type"
          keyboardType="default"
        />
      </View>
      <View style={styles.searchByCategory}>
        <Text>Search By Month</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMonth}
          value={month}
          placeholder="Enter Expense Type"
          keyboardType="default"
        />
      </View>
      <View style={styles.list}>
        <Text>Expense Type</Text>
        <Text>Amount</Text>
        <Text>Date</Text>
      </View>
      {expenseList.length > 0
        ? expenseList.map(item => (
            <View style={styles.list}>
              <Text>{item.expenseType}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          ))
        : []}
    </View>
  );
};
export default UserLog;
