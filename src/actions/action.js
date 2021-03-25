import { ADD_EXPENSE } from '../constants';

export function changeCount(count) {
  console.log('count--------', count);
  return {
    type: ADD_EXPENSE,
    payload: count,
  };
}
