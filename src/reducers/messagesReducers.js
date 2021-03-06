import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SHOW_PAGE
} from '../actioncreators/messagesActions';

const initialState = {
  messages: [],
  page: 0,
  status: 'initial',
  error: null,
  offset: 0,
  limit: 50,
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES_BEGIN:
      // Mark the state as "loading" so we can show a spinner
      // Also reset errors
      return {
        ...state,
        status: 'pending',
        error: null,
      };
    case FETCH_MESSAGES_SUCCESS:
      // Set loading to false
      // Replace empty messages array with messages from the server
      return {
        ...state,
        status: 'resolved',
        messages: action.payload.messages,
      };
    case FETCH_MESSAGES_FAILURE:
      // Set loading to false
      // Save error so it can be displayed
      // There are no messages to display, so set messages to empty array
      return {
        ...state,
        status: 'rejected',
        error: action.payload.error,
        messages: [],
      };
    case SHOW_PAGE:
      // Show the requested page 
      return {
        ...state,
        page: action.payload >= 1 ? action.payload : state.page,
      };
    default:
      return state;
  }
}
