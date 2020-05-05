import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SHOW_PAGE,
  // SHOW_PREV_PAGE,
  // SHOW_NEXT_PAGE
} from '../actioncreators/messagesActions';

const initialState = {
  messages: [],
  page: 1,
  status: 'initial',
  error: null,
  offset: 0,
  limit: 50,
};

//const page = (offset + limit) / limit;

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
      return {
        ...state,
        page: action.payload >= 1 ? action.payload : state.page,
      };
    // case SHOW_PREV_PAGE:
    //   // Show current state if page is first page
    //   if (state.page <= 1) return state;
    //   // Show previous page
    //   return {
    //     ...state,
    //     page: state.page - 1
    //   };
    // case SHOW_NEXT_PAGE:
    //   // Show current state if page is last page
    //    if (state.page < state.limit) return state;
    //   // Show next page
    //   return {
    //     ...state,
    //     page: state.page + 1
    //   }
    default:
      return state;
  }
}
