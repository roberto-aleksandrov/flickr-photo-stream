import { GET_PHOTOS } from "../types";

const initialState = {};

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_PHOTOS.FULFILLED:
        
            return payload
        default: 
            return state;
    }
}