import {combineReducers} from 'redux';
import error from './error';
import appState from './appState';
import products from './products'
export default combineReducers({
  error,
  appState,
  products
});
