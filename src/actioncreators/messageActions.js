// App code fetching messages
export const ROOT_URL = 'http://localhost:3000';
export const FETCH_MESSAGE_BEGIN = 'FETCH_MESSAGE_BEGIN';
export const FETCH_MESSAGE_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
export const FETCH_MESSAGE_FAILURE = 'FETCH_MESSAGE_FAILURE';

// Action creators
export const fetchMessageBegin = () => ({
  type: FETCH_MESSAGE_BEGIN,
});

export const fetchMessageSuccess = (message) => ({
  type: FETCH_MESSAGE_SUCCESS,
  payload: { message },
});

export const fetchMessageFailure = (error) => ({
  type: FETCH_MESSAGE_FAILURE,
  payload: { error },
});

// function checkStatus (res) {
//   if (res.status >= 200 && res.status < 300) {
//     return res
//   } else {   
//     throw new Error(res.statusText)
//   }
// }

// // Fetching specific message details
// export function fetchMessage(id) {
//   const MESSAGE_URL = `${ROOT_URL}/messages/${id}`;
//   return (dispatch) => {
//     dispatch(fetchMessageBegin());
//     return fetch(MESSAGE_URL)
//       .then(checkStatus)
//       .then((json) => {
//         dispatch(fetchMessageSuccess(json));
//         return json;
//       })
//   };
// }

// Fetching specific message details
export function fetchMessage(id) {
  const MESSAGE_URL = `${ROOT_URL}/messages/${id}`;
  return (dispatch) => {
    dispatch(fetchMessageBegin());
    return fetch(MESSAGE_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return 'Uh oh this is not supposed to happen';
      })
      .then((json) => {
        dispatch(fetchMessageSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchMessageFailure(error)));
  };
}
