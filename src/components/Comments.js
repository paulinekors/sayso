import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../actioncreators/commentsActions';
import Comment from './Comment';
import FullPageSpinner from '../utils/FullPageSpinner';

function Comments(props) {
  const { error, status, comments, fetchComments } = props;

  const { id } = useParams();
  const isLoading = status === 'fetching' || status === 'initial';
  const isRejected = status === 'rejected';

  useEffect(() => {
    fetchComments(id);
  }, [fetchComments]);

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isRejected) {
    return <div>Error! {error.message}</div>;
  }

  if (!comments || !comments.length) {
    return <div>No comments</div>;
  }

  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </div>
  );
}

Comments.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  error: PropTypes.object,
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  console.log('Comments state:');
  console.log(state);
  return {
    comments: state.comments.comments,
    status: state.comments.status,
    error: state.comments.error,
  };
}

export default connect(mapStateToProps, {
  fetchComments,
})(Comments);
