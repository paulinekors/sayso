// App code fetching comments
export const ROOT_URL = 'http://localhost:3000';
export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

// Action creators
export const fetchCommentsBegin = () => ({
    type: FETCH_COMMENTS_BEGIN,
  });
  
  export const fetchCommentsSuccess = (comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: { comments },
  });
  
  export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: { error },
  });

// Fetching comments
export function fetchComments(id) {
    const MESSAGE_URL = `${ROOT_URL}/${id}/comments`;
    return (dispatch) => {
      dispatch(fetchCommentsBegin());
      return fetch(MESSAGE_URL)
        .then((res) => 
          res.json()
        )
        .then((json) => {
          dispatch(fetchCommentsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCommentsFailure(error)));
    };
  }
  