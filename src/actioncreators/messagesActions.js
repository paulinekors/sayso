// App code
export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const ROOT_URL = 'http://localhost:3000';

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

// Fetching data
export function fetchMessages(limit) {
  const MESSAGES_URL = `${ROOT_URL}/messages?limit=${limit}`;
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
