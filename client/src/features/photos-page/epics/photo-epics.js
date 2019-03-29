import { ofType } from 'redux-observable';
import { mergeMap} from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_PHOTOS } from '../types'
import { getPhotosPending, getPhotosFulfilled, getPhotosRejected, storePhotos } from '../actions';
import { sendApiRequest } from '../../../actions';
import { transformNested } from '../../../utilities';

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

// const AUTHOR_NAME_REGEX = /\((.*?)\)/

// const mapAuthorNames = pipe(
//     transformNested(['author'], pipe(match(AUTHOR_NAME_REGEX), nth(1), replace(/\"/g, ''))),
//     transformNested(['tags'], split(' '))
// );

// export const photoEpicFulfilled = action$ => action$.pipe(
//     ofType(GET_PHOTOS.FULFILLED),
//     map(
//         pipe(
//             path(['payload', 'items']),
//             mapAuthorNames,
//             storePhotos
//         )
//     )
// )