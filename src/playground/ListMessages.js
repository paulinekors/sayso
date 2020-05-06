import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../utils/DateFormatter';
import { connect } from 'react-redux';

function ListMessages(props) {

  if (!props.messagelist || !props.messagelist.length) {
    return <div>No messages</div>
  }

  return (    
    <ol className="message-list">
      {props.error && <div>Something went wrong</div>}
      {props.messagelist.map((message) => (
        <li key={message.id} className="message-list-item">
          <div className="message-details">
            <p>{message.title}</p>
            <p>{message.firstName}</p>
            <p>{getFormattedDate(new Date (message.createdAt))}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

ListMessages.propTypes = {
  messagelist: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messagelist.messages,
    error: state.messagelist.error
  };
}

export default connect(mapStateToProps)(ListMessages);


