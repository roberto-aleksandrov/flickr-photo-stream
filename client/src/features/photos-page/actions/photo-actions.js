import { createAction } from 'redux-actions';

import { GET_PHOTOS, STORE_PHOTOS } from '../types';
import { createAsyncActions } from '../../../utilities';

export const storePhotos = createAction(STORE_PHOTOS);

export const setPhotosFilters = createAction('SET_PHOTOS_FILTERS')

export const {
    getPhotos,
    getPhotosPending,
    getPhotosFulfilled,
    getPhotosRejected,
} = createAsyncActions(GET_PHOTOS, 'getPhotos');

