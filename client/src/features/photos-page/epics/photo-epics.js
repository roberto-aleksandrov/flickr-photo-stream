import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_PHOTOS } from '../types'
import { getPhotosPending, getPhotosFulfilled, getPhotosRejected, storePhotos } from '../actions';
import { sendApiRequest } from '../../../actions';
import { processGetPhotosResponse } from '../utilities';;

export const photoEpic = action$ => action$.pipe(
    ofType(GET_PHOTOS.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getPhotosPending()),
            of(sendApiRequest({
                method: 'GET',
                url: 'services/rest/',
                fulfilled: getPhotosFulfilled,
                rejected: getPhotosRejected,
                data: payload
            }, {
                api: 'flickrApi'
            }))
        ))
);

export const photoEpicFulfilled = action$ => action$.pipe(
    ofType(GET_PHOTOS.FULFILLED),
    map(({payload}) => storePhotos(processGetPhotosResponse(payload)))
);