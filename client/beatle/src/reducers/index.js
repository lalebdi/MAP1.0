import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import projectTaskReducer from './projectTaskReducer';

export default combineReducers({
    // all the reducers meet here
    errors: errorsReducer,
    project_task: projectTaskReducer
})