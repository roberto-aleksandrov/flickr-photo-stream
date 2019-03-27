import { combineReducers } from 'redux';
import { photosReducer } from '../features/photos-page/reducers';

const rootReducer = combineReducers({
    photosReducer
});

export default rootReducer;