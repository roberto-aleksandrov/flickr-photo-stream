import { STORE_PHOTOS } from "../types";

const initialState = [];

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case STORE_PHOTOS:
            return [...state, ...payload]
        default: 
            return state;
    }
}