// App code fetching messages
export const ROOT_URL = 'http://localhost:3000';
export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const SHOW_PAGE = 'SHOW_PAGE';

// Action creators
export const fetchMessagesBegin = () => ({
  type: FETCH_MESSAGES_BEGIN,
});

export const fetchMessagesSuccess = (messages) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages },
});

export const fetchMessagesFailure = (error) => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error },
});

export const showPage = (number) => (dispatch) => {
  return dispatch({ type: SHOW_PAGE, payload: number });
};

// Fetching data
export function fetchMessages(limit, offset) {
  const MESSAGES_URL = `${ROOT_URL}/messages?limit=${limit}&offset=${offset}`;
  return (dispatch) => {
    dispatch(fetchMessagesBegin());
    return fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchMessagesSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchMessagesFailure(error)));
  };
}
