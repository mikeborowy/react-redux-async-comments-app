import {jsonPlaceholder} from '../api/index';

export const types = {
    FETCH_USER: 'FETCH_USER'
}

export const users = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}

 export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: types.FETCH_USER, payload: response.data })
};

// //Memoizing START
// export const fetchUsers = id => (dispatch, getState) =>  _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: types.FETCH_USER, payload: response.data })
// });
// //Memoizing END
