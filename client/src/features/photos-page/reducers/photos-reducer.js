import { GET_PHOTOS } from "../types";

const initialState = {
    pagesInfo: {
        page: 0, 
        pages: undefined,
    },
    photos: [],
    perPage: 20,
    filters: {
        tags: ['safe'],
    }
};

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_PHOTOS.FULFILLED:
            return {
                ...state,
                pagesInfo: {
                    page: payload.photos.page,
                    pages: payload.photos.pages,
                },
                photos: [...state.photos, ...payload.photos.photo]
            }
        case 'SET_PHOTOS_FILTERS': 
            return {
                ...initialState,
                filters: {
                    tags: ['safe', ...payload.tags.split(',')]
                }
            }
        default: 
            return state;
    }
}