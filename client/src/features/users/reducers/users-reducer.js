import { toast } from 'react-toastify';
import { pathOr } from 'ramda';

import { GET_USERS, GET_USER_BY_ID, DELETE_USER, UPDATE_USER } from '../types';
import { CREATE_USER } from '../create-user-page/types';
import { stat } from 'fs';

const initialState = {
    selectedUser: undefined,
    users: []
};

const getErrorMessage = pathOr('Something went wrong!', ['response', 'data', 'message']);

export const usersReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_USERS.FULFILLED: 
            return {
                ...state,
                users: payload.data
            };  
        case GET_USER_BY_ID.FULFILLED: 
            return {
                ...state,
                selectedUser: payload.data
            };
        case UPDATE_USER.FULFILLED:
            toast.success('User successfully updated !', {
                position: toast.POSITION.BOTTOM_RIGHT
                });
            return state;
        case DELETE_USER.FULFILLED:
            toast.success('User successfully deleted !', {
                position: toast.POSITION.BOTTOM_RIGHT
                });
            return {
                ...state,
                users: state.users.filter(({_id}) => _id !== payload.data.id)
            };
        case GET_USER_BY_ID.REJECTED:
        case DELETE_USER.REJECTED:
        case CREATE_USER.REJECTED:
        case GET_USERS.REJECTED:
            toast.error(getErrorMessage(payload), {
                position: toast.POSITION.BOTTOM_RIGHT
              });
            return state; 
        default: 
            return state;
    };
};

export default usersReducer;