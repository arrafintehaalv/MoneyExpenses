import {ADD_EXPENSE, EXPENSE_LIST} from '../constants';

export function changeCount(count) {
  console.log('count--------', count);
  return {
    type: ADD_EXPENSE,
    payload: count,
  };
}
export function changeList(payload) {
  console.log('list--------', payload);
  return {
    type: EXPENSE_LIST,
    payload,
  };
}
