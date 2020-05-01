import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../utils/DateFormatter';

function ListMessages(props) {

  if (!props.messages || !props.messages.length) {
    return <div>No messages</div>
  }

  return (    
    <ol className="message-list">
      {props.error && <div>Something went wrong</div>}
      {props.messages.map((message) => (
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
  messages: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ListMessages;
