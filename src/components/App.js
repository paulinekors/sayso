import React, { useEffect } from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import { fetchMessages } from '../reducers/messagesReducers';
import { connect } from 'react-redux';

function App() {
  const limit = 50;
  const { error, loading, messages } = this.props;

  useEffect(() => {
    fetchMessages(limit);
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!messages || !messages.length) {
    return <div>No messages</div>
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
    </div>
  );
}

App.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.listmessages.messages,
    loading: state.listmessages.loading,
    error: state.listmessages.error,
  };
}

export default connect(mapStateToProps)(App);

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
