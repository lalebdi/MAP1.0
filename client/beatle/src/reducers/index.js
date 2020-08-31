import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';

export default combineReducers({
    // all the reducers meet here
    errors: errorsReducer
})