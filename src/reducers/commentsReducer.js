import {
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
  } from '../actioncreators/commentsActions';

  const initialState = {
    comments: [],
    status: 'initial',
    error: null,
  };

  export default function commentsReducer (state = initialState, action) {
    switch (action.type) {
      case FETCH_COMMENTS_BEGIN:
        return {
          ...state,
          status: 'fetching',
          error: null,
        };
      case FETCH_COMMENTS_SUCCESS:
        return {
          ...state,
          status: 'resolved',
          comments: action.payload.comments,
        };
      case FETCH_COMMENTS_FAILURE:
        return {
          ...state,
          status: 'error',
          error: action.payload.error,
          comments: [],
        };
      default:
        return state;
    }
  }