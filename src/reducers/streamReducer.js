import _ from 'lodash';
import { FETCH_ALL_STREAMS, FETCH_STREAM, CREATE_STREAM,
EDIT_STREAM, DELETE_STREAM } from '../actions/types';

 const streamReducer = (state = {}, action) => {
    switch(action.type) {
        //merging list of records - it takes in an array and returns an obj
        case FETCH_ALL_STREAMS: {
            return {...state, ..._.mapKeys(action.payload, 'id')} ;          
        }
        case FETCH_STREAM: {
            return {...state, [action.payload.id]: action.payload  };   
        }
        case CREATE_STREAM: {
            return {...state, [action.payload.id]: action.payload  };          
        }
        case EDIT_STREAM: {
            return {...state, [action.payload.id]: action.payload  };      
        }
        //deleting with omit - omit does not change the original state obj instead
        //it creates a new object with all the same propeties
        case DELETE_STREAM: {
            return _.omit(state, action.payload);         
        }
        default:
            return state;
    }
};

export default streamReducer;