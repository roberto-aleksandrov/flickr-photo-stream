import { CREATE_USER } from '../types';
import { createAsyncActions } from '../../../../utilities';

export const {
    createUser,
    createUserPending,
    createUserFulfilled,
    createUserRejected,
} = createAsyncActions(CREATE_USER, 'createUser');