import axios from 'axios';
import { GET_ERRORS } from './types';

 //history is a prop that is passed by the react router

export const addProjectTask = (project_task, history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/board", project_task);
    history.push("/")
    dispatch({ //this is to clear out the error object when everything goes well
        type: GET_ERRORS,
        payload: {

        }
    })
    }catch (error) {
        dispatch({ 
            type: GET_ERRORS,
            payload:  error.response.data
    
            
        })
    }
    
}

// If theres an error it goes from here to the reducer and the reducer will return the payload which will go to the root reducer and return to update the store
