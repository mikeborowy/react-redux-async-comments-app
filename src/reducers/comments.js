import {jsonPlaceholder} from '../api/index';
import _ from 'lodash';
import {fetchUser} from './users';

export const types = {
    FETCH_COMMENTS: 'FETCH_COMMENTS'
}

export const comments = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS:
            return action.payload;
        default:
            return state;
    }
}

export const fetchComments = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch( { type: types.FETCH_COMMENTS, payload: response.data } );
};

export const fetchCommentsAndUsers = () => async (dispatch, getState) => {
    await dispatch( fetchComments() );

    // const userIds = _.uniq( _.map( getState().comments, 'userId') );
    //async doesn't work with forEach. If you want load each user use
    //await Promise.all(userId.map(id => dispatch( fetchUser(id) ))
    // userIds.forEach( id => dispatch( fetchUser(id) ) )

    _.chain( getState().comments )
        .map('userId')
        .uniq()
        .forEach( id => dispatch( fetchUser(id) ))
        .value(); //execute all steps
}