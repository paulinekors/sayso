import React, { useEffect } from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import {
  fetchMessages,
  showPage
} from '../actioncreators/messagesActions';
import { connect } from 'react-redux';
import FullPageSpinner from '../utils/FullPageSpinner';

function App(props) {
  const limit = 50;
  const {
    error,
    status,
    messages,
    page,
    fetchMessages,
    showPage,
  } = props;
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';
  const isRejected = status === 'rejected';

  console.log(messages); // making sure messages is not undefined

  useEffect(() => {
    fetchMessages(limit, page * limit);
  }, [fetchMessages]); // on 1st render

  useEffect(() => {
    fetchMessages(limit, page * limit);
  }, [page]); // on page-change

  if (isRejected) {
    return <div>Error! {error.message}</div>;
  }
  if (isLoading) {
    return <FullPageSpinner />;
  }
  if (!messages || !messages.length) {
    return <div>No messages</div>;
  }

  if (isResolved) {
    return (
      <div data-testid="app">
        <ol className="message-list">
          {messages.map((message) => (
            <li key={message.id} className="message-list-item">
              <div className="message-details">
                <p>{message.title}</p>
                <p>{message.firstName}</p>
                <p>{getFormattedDate(new Date(message.createdAt))}</p>
              </div>
            </li>
          ))}
        </ol>
        <div>
        </div>
        {page > 1 && (
          <button className="btn" onClick={() => showPage(page - 2)}>
            Page {page - 1}
          </button>
        )}
        {page > 0 && (
          <button className="btn" onClick={() => showPage(page - 1)}>
            Page {page}
          </button>
        )}
        <button className="btn" disabled>
          Page {page + 1}
        </button>
        {messages.length >= limit && (
          <button className="btn" onClick={() => showPage(page + 1)}>
            Page {page + 2}
          </button>
        )}
        {messages.length >= limit && (
          <button className="btn" onClick={() => showPage(page + 2)}>
            Page {page + 3}
          </button>
        )}
      </div>
    );
  }
}

App.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  error: PropTypes.string,
  status: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.listmessages.messages,
    status: state.listmessages.status,
    error: state.listmessages.error,
    offset: state.listmessages.offset,
    page: state.listmessages.page,
  };
}

export default connect(mapStateToProps, {
  fetchMessages,
  showPage,
})(App);
