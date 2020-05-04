import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SHOW_PREV_PAGE,
  SHOW_NEXT_PAGE
} from '../actioncreators/messagesActions';

const initialState = {
  messages: [],
  loading: false,
  error: null,
  offset: 0,
  limit: 50
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
        messages: action.payload.messages
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
      case SHOW_PREV_PAGE:
        // Show the prev # of messages determined by limit and offset
        return {
          ...state,
          offset: action.payload.offset - action.payload.limit
        };
      case SHOW_NEXT_PAGE:
        // Show the next # of messages determined by limit and offset
        return {
          ...state,
          offset: action.payload.offset + action.payload.limit
        }
    default:
      return state;
  }
}




