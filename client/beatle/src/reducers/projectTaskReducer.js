// first import the action
import { GET_PROJECT_TASKS, DELETE_PROJECT_TASK } from '../actions/types';

const initialState = {
    project_tasks: [],
    project_task: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload
            };
        
        
        case GET_PROJECT_TASK:
            return{
                ...state,
                project_task: action.payload
            }

        case DELETE_PROJECT_TASK:
            return {
                ...state,
                project_tasks: state.project_tasks.filter(   //this will update the state when we call the API. so when we delete something it is just one API call
                    project_task => project_task.id !== action.payload)
                };

        default:
            return state;
    }
}
// next, the action to create the get


// whenever a new reducer is created, it has to be declared in the combine reducer