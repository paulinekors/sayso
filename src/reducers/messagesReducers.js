import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
} from '../actioncreators/messagesActions';

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

export default function messagesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MESSAGES_BEGIN:
      // Mark the state as "loading" so we can show a spinner
      // Also reset errors
      return {
        ...state, 
        loading: true, 
        error: null
      };
    case FETCH_MESSAGES_SUCCESS:
      // Set loading to false
      // Replace empty messages array with messages from the server
      return {
        ...state,
        loading: false,
        messages: action.payload.messagelist
      };
    case FETCH_MESSAGES_FAILURE:
      // Set loading to false
      // Save error so it can be displayed
      // There are no messages to display, so set messages to empty array
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        messages: []
      };
    default:
      return state;
  }
}




