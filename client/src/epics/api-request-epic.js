import { mergeMap, map, catchError, mapTo} from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import axios from 'axios';

import { API_REQUEST } from '../types';

const apiRequestEpic$ = action$ => action$.pipe(
    ofType(API_REQUEST),
    mergeMap(({payload}) => from(axios({method: payload.method, url: payload.url}))
        .pipe(
            map((response) => 
                payload.fulfilled(response)
            ),
            catchError(err => of(payload.rejected(err)))
        )
    )
);

export default apiRequestEpic$;