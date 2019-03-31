import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { CREATE_USER } from '../types';
import { createUserPending, createUserFulfilled, createUserRejected } from '../actions';
import { sendApiRequest } from '../../../../actions';

export const createUserEpic$ = action$ => action$.pipe(
    ofType(CREATE_USER.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(createUserPending()),
            of(sendApiRequest({
                method: 'post',
                url: 'users',
                onSuccess: [createUserFulfilled],
                rejected: createUserRejected,
                data: payload
            }, {
                api: 'ajaxApi'
            }))
        ))
);