import React, {useState, useEffect} from 'react';
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
  const [filteredExpenseList, setFilteredExpenseList] = useState(expenseList);
  console.log('filteredExpenseList-------', filteredExpenseList);
  const [expenseType, setExpenseType] = useState('');
  const [week, setWeek] = useState('');
  const [month, setMonth] = useState('');
  console.log('expenseList', expenseList);
  useEffect(() => {
    console.log('filteredExpenseList', filteredExpenseList);
    if (expenseType !== '') {
      setFilteredExpenseList(
        expenseList
          .filter(item => item.expenseType.includes(expenseType))
          .map(({expenseType, amount, date}) => ({expenseType, amount, date})),
      );
    }
    if (week !== '') {
      setFilteredExpenseList(
        expenseList
          .filter(item => item.date.substr(0, 3).includes(week))
          .map(({expenseType, amount, date}) => ({expenseType, amount, date})),
      );
    }
    if (month !== '') {
      setFilteredExpenseList(
        expenseList
          .filter(item => item.date.substr(4, 7).includes(month))
          .map(({expenseType, amount, date}) => ({expenseType, amount, date})),
      );
    }
  }, [expenseType, week, month, expenseList]);
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
          placeholder="Enter Expense Type (i.e. Home)"
          keyboardType="default"
        />
      </View>
      <View style={styles.searchByCategory}>
        <Text>Search By Week</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeek}
          value={week}
          placeholder="Enter Week (i.e. Sun)"
          keyboardType="default"
        />
      </View>
      <View style={styles.searchByCategory}>
        <Text>Search By Month</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMonth}
          value={month}
          placeholder="Enter Month (i.e. Jan)"
          keyboardType="default"
        />
      </View>
      <View style={styles.list}>
        <Text>Expense Type</Text>
        <View style={{paddingRight: '30%'}}>
          <Text>Amount</Text>
        </View>
        <Text>Date</Text>
      </View>
      {!week && !month && !expenseType
        ? expenseList.map((item, index) => (
            <View style={styles.list} key={index}>
              <Text>{item.expenseType}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          ))
        : filteredExpenseList.length > 0
        ? filteredExpenseList.map((item, index) => (
            <View style={styles.list} key={index}>
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
