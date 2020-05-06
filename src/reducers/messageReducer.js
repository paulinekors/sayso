import {
    FETCH_MESSAGE_BEGIN,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAILURE
  } from '../actioncreators/messageActions';

  const initialState = {
    message: {},
    status: 'initial',
    error: null,
  };

  export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MESSAGE_BEGIN:
        // Mark the state as "loading" so we can show a spinner
        // Also reset errors
        return {
          ...state,
          status: 'pending',
          error: null,
        };
      case FETCH_MESSAGE_SUCCESS:
        // Set loading to false
        // Replace empty message object with requested message from the server
        return {
          ...state,
          status: 'resolved',
          message: action.payload.message,
        };
      case FETCH_MESSAGE_FAILURE:
        // Set loading to false
        // Save error so it can be displayed
        // There is no messages to display, so set message to empty object
        return {
          ...state,
          status: 'rejected',
          error: action.payload.error,
          message: {},
        };
      default:
        return state;
    }
  }