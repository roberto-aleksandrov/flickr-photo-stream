import { combineReducers } from 'redux';
import { photosReducer } from '../features/photos-page/reducers';
import { usersReducer } from '../features/users/reducers';

const rootReducer = combineReducers({
    photosReducer,
    usersReducer
});

export default rootReducer;