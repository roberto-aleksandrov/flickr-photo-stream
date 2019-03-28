import { ofType } from 'redux-observable';
import { mergeMap, map} from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { pipe, prop, match, nth, replace } from 'ramda';

import { GET_PHOTOS } from '../types'
import { getPhotosPending, getPhotosFulfilled, getPhotosRejected, storePhotos } from '../actions';
import { sendApiRequest } from '../../../actions';
import { transformNested } from '../../../utilities';


export const photoEpic = action$ => action$.pipe(
    ofType(GET_PHOTOS.DEFAULT),
    mergeMap(() => 
        merge(
            of(getPhotosPending()),
            of(sendApiRequest({
                method: 'GET',
                url: 'services/feeds/photos_public.gne?jsoncallback=?&format=json',
                fulfilled: getPhotosFulfilled,
                rejected: getPhotosRejected,
            }, {
                api: 'flickrApi'
            }))
        ))
);

const AUTHOR_NAME_REGEX = /\((.*?)\)/

const mapAuthorNames = transformNested(['items', 'author'], pipe(match(AUTHOR_NAME_REGEX), nth(1), replace('\"', '')))

export const photoEpicFulfilled = action$ => action$.pipe(
    ofType(GET_PHOTOS.FULFILLED),
    map(
        pipe(
            prop('payload'),
            mapAuthorNames,
            storePhotos
        )
    )
)