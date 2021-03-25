import {createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer';
const rootReducer = combineReducers({count: reducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
