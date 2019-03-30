import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { 
    getPhotosPending,
    getPhotosFulfilled,
    getPhotosRejected,
    processPhotos,
    processPhotosFulfilled,
    processPhotosRejected } from '../actions';
import { GET_PHOTOS, PROCESS_PHOTOS } from '../types'
import { sendApiRequest } from '../../../actions';
import { processGetPhotosResponse } from '../utilities';;


export const photoEpic = action$ => action$.pipe(
    ofType(GET_PHOTOS.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getPhotosPending()),
            of(sendApiRequest({
                url: 'services/rest/',
                onSuccess: [getPhotosFulfilled, processPhotos],
                rejected: getPhotosRejected,
                data: payload
            }, {
                api: 'flickrApi'
            }))
        ))
);

export const photoEpicFulfilled = action$ => action$.pipe(
    ofType(PROCESS_PHOTOS.DEFAULT),
    map(({payload}) => processGetPhotosResponse(payload)),
    map(processPhotosFulfilled),
    catchError(processPhotosRejected)
);