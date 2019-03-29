import { STORE_PHOTOS, SET_PHOTOS_FILTERS } from "../types";

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
        case STORE_PHOTOS:
            return {
                ...state,
                pagesInfo: {
                    page: payload.photos.page,
                    pages: payload.photos.pages,
                },
                photos: [...state.photos, ...payload.photos.photo]
            }
        case SET_PHOTOS_FILTERS:
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