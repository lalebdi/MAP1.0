import {Get_ERRORS } from '../actions/types';

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){

        case Get_ERRORS:
            return action.payload;

        default:
        return state;
    }
}

