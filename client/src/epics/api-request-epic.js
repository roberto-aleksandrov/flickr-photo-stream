import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';

import { API_REQUEST } from '../types';

const apiRequestEpic$ = (apis) => action$ => action$.pipe(
    ofType(API_REQUEST),
    mergeMap(({payload, meta}) => from(apis[meta.api].exec(payload))
        .pipe(
            map((response) => payload.fulfilled(response)),
            catchError(err => of(payload.rejected(err)))
        )
    )
);

export default apiRequestEpic$;