import { combineEpics } from 'redux-observable';
import { photoEpic, photoEpicFulfilled } from '../features/photos-page/epics';
import apiRequestEpic from './api-request-epic';

const rootEpic = (apis) => combineEpics(
    photoEpic,
    photoEpicFulfilled,
    apiRequestEpic(apis)   
);

export default rootEpic;