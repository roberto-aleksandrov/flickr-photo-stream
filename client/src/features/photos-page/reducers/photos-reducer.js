import { STORE_PHOTOS } from "../types";

const initialState = {items: []};

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case STORE_PHOTOS:
            return payload
        default: 
            return state;
    }
}