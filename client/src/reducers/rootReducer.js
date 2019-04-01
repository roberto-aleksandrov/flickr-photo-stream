import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import notificationsReducer from './notifications-reducer';
import { photosReducer } from '../features/photos-page/reducers';
import { usersReducer } from '../features/users/reducers';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    notificationsReducer,
    photosReducer,
    usersReducer
});

export default rootReducer;