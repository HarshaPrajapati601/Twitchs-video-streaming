import streamAPI from '../apis/streamAPi';

export const signIn = (userId) => {
    return{
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: 'SIGN_OUT'
    }
}

export const createStream = formValues => async dispatch => {
        streamAPI.post('/streams',formValues);
    }
