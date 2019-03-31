import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_USERS, UPDATE_USER, DELETE_USER, GET_USER_BY_ID } from '../types';
import { getUsersPending
    ,getUsersFulfilled
    ,getUsersRejected,
    deleteUserPending,
    deleteUserFulfilled,
    deleteUserRejected,
    getUserByIdPending,
    getUserByIdFulfilled,
    getUserByIdRejected, 
    updateUserPending,
    updateUserFulfilled,
    updateUserRejected, } from '../actions';
import { sendApiRequest } from '../../../actions';

export const getUsersEpic$ = action$ => action$.pipe(
    ofType(GET_USERS.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getUsersPending()),
            of(sendApiRequest({
                method: 'get',
                url: 'users',
                onSuccess: [getUsersFulfilled],
                rejected: getUsersRejected,
                data: payload
            }, {
                api: 'ajaxApi'
            }))
        ))
);

export const getUserByIdEpic$ = action$ => action$.pipe(
    ofType(GET_USER_BY_ID.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getUserByIdPending()),
            of(sendApiRequest({
                method: 'get',
                url: `users/${payload}`,
                onSuccess: [getUserByIdFulfilled],
                rejected: getUserByIdRejected,
                data: payload
            }, {
                api: 'ajaxApi'
            }))
        ))
);

export const updateUserEpic$ = action$ => action$.pipe(
    ofType(UPDATE_USER.DEFAULT),
    mergeMap(({payload: {_id, ...data}}) => 
        merge(
            of(updateUserPending()),
            of(sendApiRequest({
                method: 'put',
                url: `users/${_id}`,
                onSuccess: [updateUserFulfilled],
                rejected: updateUserRejected,
                data
            }, {
                api: 'ajaxApi'
            }))
        ))
);

export const deleteUserEpic$ = action$ => action$.pipe(
    ofType(DELETE_USER.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(deleteUserPending()),
            of(sendApiRequest({
                method: 'delete',
                url: `users/${payload}`,
                onSuccess: [deleteUserFulfilled],
                rejected: deleteUserRejected,
            }, {
                api: 'ajaxApi'
            }))
        ))
);