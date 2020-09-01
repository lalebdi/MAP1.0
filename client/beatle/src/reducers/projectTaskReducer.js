// first import the action
import { GET_PROJECT_TASKS } from '../actions/types';

const initialState = {
    project_tasks: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload
            }

        default:
            return state;
    }
}
// next, the action to create the get


// whenever a new reducer is created, it has to be declared in the combine reducer