import {ADD_EXPENSE, EXPENSE_LIST} from '../constants';
import {initialState} from '../initialState/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case EXPENSE_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
