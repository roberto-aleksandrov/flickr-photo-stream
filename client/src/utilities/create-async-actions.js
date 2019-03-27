import { mapObjIndexed } from 'ramda';
import { createAction } from 'redux-actions';

const createAsyncActions = actionTypes => ({
    default: createAction(actionTypes.DEFAULT),
    pending: createAction(actionTypes.PENDING),
    fulfilled: createAction(actionTypes.FULFILLED),
    rejected: createAction(actionTypes.REJECTED),
})

export default createAsyncActions;