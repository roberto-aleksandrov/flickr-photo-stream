import { API_REQUEST } from '../types';

export const sendApiRequest = payload => ({
    type: API_REQUEST,
    payload
});