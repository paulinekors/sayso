import React, { useEffect } from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import { fetchMessages } from '../actioncreators/messagesActions';
import { connect } from 'react-redux';
import FullPageSpinner from '../utils/FullPageSpinner';

function App(props) {
  const limit = 50;
  const offset = 0;
  const { error, loading, messages, fetchMessages, showNextPage, showPrevPage } = props;

  console.log(messages); //making sure messages is defined

  useEffect(() => {
    fetchMessages(limit, offset);
  }, [fetchMessages]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  if (loading) {
    return <FullPageSpinner />;
  }
  if (!messages || !messages.length) {
    return <div>No messages</div>;
  }

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
        <button className="btn" onClick={() => fetchMessages(50, 0)}>Page 1</button>
        <button className="btn" onClick={() => fetchMessages(50, 50)}>Page 2</button>
        <button className="btn" onClick={() => fetchMessages(50, 100)}>Page 3</button>
        <button className="btn" onClick={() => fetchMessages(50, 150)}>Page 4</button>
      </div>
      <button
        className="btn" 
        onClick={() => {
          showPrevPage();
        }}
      >
        Previous page
      </button>
      <button
        className="btn" 
        onClick={() => {
          showNextPage();
        }}
      >
        Next page
      </button>
    </div>
  );
}

App.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  showNextPage: PropTypes.func,
  showPrevPage: PropTypes.func,
  messages: PropTypes.array.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.listmessages.messages,
    loading: state.listmessages.loading,
    error: state.listmessages.error,
    offset: state.listmessages.offset,
  };
}

export default connect(mapStateToProps, { fetchMessages })(App);

// ORIGINAL API-CALL-WITHOUT_REDUX_STORE IMPORTS
// import { useState } from 'react';
// import { fetchMessages } from '../utils/MessagesAPI';
// import ListMessages from './ListMessages';

// ORIGINAL API-CALL-WITHOUT_REDUX_STORE CODE
// function App() {
//   const [messages, setMessages] = useState([]);
//   const [error, setError] = useState(false);
//   const limit = 50;

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const { error, messages } = await fetchMessages(limit);

//         if (error) {
//           throw error;
//         }

//         setMessages(messages);
//       } catch (error) {
//         console.error(error);
//         setError(true);
//       }
//     };

//     fetch();
//   }, []);

//   return (
//     <div data-testid="app">
//       <ListMessages messages={messages} error={error} data-testid="messages" />
//     </div>
//   );

// }

// export default App;
