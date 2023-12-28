// rootReducer.js
import { combineReducers } from 'redux';
import { cartReducer } from './Reducer';

const rootReducer = combineReducers({
  cartReducer,
  // other reducers...
});

export default rootReducer;
