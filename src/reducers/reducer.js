import {ADD_EXPENSE} from '../constants';

const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
