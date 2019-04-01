import { combineEpics } from 'redux-observable';
import apiRequestEpic from './api-request-epic';
import { getPhotosEpic$, processPhotosEpic$ } from '../features/photos-page/epics';
import { getUsersEpic$, deleteUserEpic$, getUserByIdEpic$, updateUserEpic$, createUserEpic$ } from '../features/users/epics';

const rootEpic = (apis) => combineEpics(
    apiRequestEpic(apis),
    getPhotosEpic$,
    processPhotosEpic$,
    createUserEpic$,
    getUsersEpic$,
    getUserByIdEpic$,
    updateUserEpic$,
    deleteUserEpic$
);

export default rootEpic;