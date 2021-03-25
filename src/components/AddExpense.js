import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useSelector, useDispatch} from 'react-redux';
import { changeCount } from '../actions/action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  expense: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 30,
    color: 'green',
  },
  expenseHeaderText: {
    marginBottom: 10,
  },
});
function AddExpense({navigation}) {
  const dispatch = useDispatch();
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isValidated, setValidated] = useState(false);
  const onPressAddExpense = () => {
    navigation.navigate('Home');
    dispatch(changeCount(amount));
  };
  useEffect(() => {
    console.log(date);
  }, [date]);
  useEffect(() => {
    if (amount && expenseType) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [amount, expenseType]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ADD EXPENSE</Text>
      </View>
      <View style={styles.expense}>
        <Text style={styles.expenseHeaderText}>Expense Type: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setExpenseType}
          value={expenseType}
          placeholder="i.e. Home Expense etc."
          keyboardType="default"
        />
      </View>
      <View style={styles.expense}>
        <Text style={styles.expenseHeaderText}>Expense Amount: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Enter Amount (Number)"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.expense}>
        <Text style={styles.expenseHeaderText}>Expense Date: </Text>
        <DatePicker mode="date" date={date} onDateChange={setDate} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressAddExpense()}
        disabled={!isValidated}
        activeOpacity={isValidated ? 1 : 0.5}>
        <Text>Add Expense</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default AddExpense;
