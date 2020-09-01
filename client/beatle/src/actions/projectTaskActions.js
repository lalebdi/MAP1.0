import axios from 'axios';
import { GET_ERRORS } from './types';
import { GET_PROJECT_TASKS } from './types'
import { DELETE_PROJECT_TASK } from './types'

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

export const getBacklog = () => async dispatch => {
    const res = await axios.get('http://localhost:8080/api/board/all')
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data
    })
}

export const deleteProjectTask = pt_id => async dispatch => {
    if(window.confirm(`You are deleting project task ${pt_id}, This cannot be undone`)){

        await axios.delete(`http://localhost:8080/api/board/${pt_id}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: pt_id //
        });
    }
}

export const getProjectTask = (pt_id, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/board/${pt_id}`);
    dispatch({
        type: GET_PROJECT_TASK,
        payload: res.data

        
    })
    }catch (error) {
        dispatch{ 
            history.push('/');
        }
    }
}