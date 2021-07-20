import streamAPi from '../apis/streamAPi';
import {CREATE_STREAM, SIGN_IN, SIGN_OUT, FETCH_ALL_STREAMS,
EDIT_STREAM, DELETE_STREAM, FETCH_STREAM}  from './types';

import history from '../history';

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}
export const fetchAllStreams = () => async dispatch => {
    const response = await streamAPi.get('/streams');
    dispatch({
        type: FETCH_ALL_STREAMS,
        payload: response.data
    })
};

export const fetchStream = (id) => async dispatch => {
    const response = await streamAPi.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streamAPi.post('/streams',{ ...formValues, userId});
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    //do programatic navigation --go to route
    //History refrences
    history.push('/');
};

export const editStream = (id, formvalues) => async dispatch => {
    const response = await streamAPi.put(`/streams/${id}`, formvalues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
};

export const deleteStream = id => async dispatch => {
     await streamAPi.post(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    };

