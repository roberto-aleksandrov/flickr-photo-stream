import { toast } from 'react-toastify';
import { PROCESS_PHOTOS, SET_PHOTOS_FILTERS, GET_PHOTOS } from '../types';
import { GET_PHOTOS_FAILURE_MESSAGE } from '../constants';

const initialState = {
    pagesInfo: {
        page: 0, 
        pages: 1,
    },
    photos: [],
    perPage: 20,
    filters: {
        tags: ['safe'],
    }
};

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case PROCESS_PHOTOS.FULFILLED:
            return {
                ...state,
                pagesInfo: {
                    page: payload.photos.page,
                    pages: payload.photos.pages,
                },
                photos: [...state.photos, ...payload.photos.photo]
            };
        case SET_PHOTOS_FILTERS:
            return {
                ...initialState,
                filters: {
                    tags: ['safe', ...payload.tags.split(',')]
                }
            };
        case GET_PHOTOS.REJECTED:
            toast.error(GET_PHOTOS_FAILURE_MESSAGE, {
                position: toast.POSITION.BOTTOM_RIGHT
              });
            return {
                ...state,
                pagesInfo: { page: 0}
            };
        default: 
            return state;
    }
};