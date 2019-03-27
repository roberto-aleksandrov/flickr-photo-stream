import { combineEpics } from 'redux-observable';
import { photoEpic } from '../features/photos-page/epics';
import apiRequestEpic from './api-request-epic';

const rootEpic = combineEpics(
    photoEpic,
    apiRequestEpic   
);

export default rootEpic;