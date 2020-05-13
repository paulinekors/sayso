import React, { useEffect } from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import { fetchMessages, showPage } from '../actioncreators/messagesActions';
import { connect } from 'react-redux';
import FullPageSpinner from '../utils/FullPageSpinner';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

function App(props) {
  const limit = 50;
  const { error, status, messages, page, fetchMessages, showPage } = props;
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';
  const isRejected = status === 'rejected';

  //console.log(messages); // making sure messages is not undefined

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
      <div>
        <ol className="list">
          {messages.map((message) => (
            <li key={message.id} className="message-list">
              <div className="message-list__top">
                <h2 className="message-list__title">{message.title}</h2>
              </div>
              <div className="message-list__bottom">
                <p>{message.firstName}</p>
                <p>{getFormattedDate(new Date(message.createdAt))}</p>
              </div>
              <div>
                <Link to={`/${message.id}`}>
                  <Fab size="small">
                    <ExpandMoreIcon />
                  </Fab>
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <div className="pagination">
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
  //console.log(state);
  return {
    messages: state.messages.messages,
    status: state.messages.status,
    error: state.messages.error,
    offset: state.messages.offset,
    page: state.messages.page,
  };
}

export default connect(mapStateToProps, {
  fetchMessages,
  showPage,
})(App);
