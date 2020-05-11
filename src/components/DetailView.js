import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FullPageSpinner from '../utils/FullPageSpinner';
import { fetchMessage } from '../actioncreators/messageActions';

function DetailView(props) {
  const { error, status, message, fetchMessage } = props;
  const { id } = useParams();
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';
  const isRejected = status === 'rejected';

  console.log(message); // making sure message is not undefined

  useEffect(() => {
    fetchMessage(id);
  }, [fetchMessage]); 


  if (isRejected) {
    return <div>Error! {error.message} </div>;
  }
  if (isLoading) {
    return <FullPageSpinner />;
  }
  if (!message || !message.length) {
    return <div>No message to display</div>;
  }

  if (isResolved) {
    return (
      <div>
        Yay. ID: {id}
      </div>
    );
  }
}
DetailView.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  error: PropTypes.object,
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    message: state.message.message,
    status: state.message.status,
    error: state.message.error,
  };
}

export default connect(mapStateToProps, {
  fetchMessage,
})(DetailView);
