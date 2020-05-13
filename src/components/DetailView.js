import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FullPageSpinner from '../utils/FullPageSpinner';
import { fetchMessage } from '../actioncreators/messageActions';
import { getFormattedDate } from '../utils/DateFormatter';
import Comments from './Comments';

function DetailView(props) {
  const { error, status, message, fetchMessage } = props;
  const { id } = useParams();
  const isLoading = status === 'fetching' || status === 'initial';
  const isRejected = status === 'rejected';

  //console.log(message); // making sure message is not undefined
  //console.log(status);

  useEffect(() => {
    fetchMessage(id);
  }, [fetchMessage]);

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isRejected) {
    return <div>Error! {error.message} </div>;
  }

  if (!message) {
    return <div>No message to display</div>;
  }

  return (
    <div className="message">
      <div className="message__top">
        <h2 className="message__title">{message.title}</h2>
        <img className="circle-img" src={message.avatar} alt="avatar_img" />
      </div>
      <div className="message__bottom">
        <p>{message.category}</p>
        <p>{message.body}</p>
        <p className="message__name">{message.firstName} {message.lastName}</p>
        <p>{message.email}</p>
        <p className="message__date">{getFormattedDate(new Date(message.createdAt))}</p>
      </div>
      <Comments />
    </div>
  );
}

DetailView.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired, 
  error: PropTypes.object,
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  console.log("Detailview state:")
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
