import { ofType } from 'redux-observable';
import { mapTo, mergeMap} from 'rxjs/operators';
import { merge, of, from } from 'rxjs';
import axios from 'axios';

import { GET_PHOTOS } from '../types'
import { getPhotos } from '../actions';
import { sendApiRequest } from '../../../actions';;

export const photoEpic = action$ => action$.pipe(
    ofType(GET_PHOTOS.DEFAULT),
    mergeMap(() => 
        merge(
            of(getPhotos.pending()),
            of(sendApiRequest({
                method: 'GET',
                url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
                ...getPhotos
            }))
        ))
    // delay(1000),
    // mapTo({ type: 'PONG' })
);