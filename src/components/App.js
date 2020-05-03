import React, { useEffect } from 'react';
// import ListMessages from './ListMessages';
import { getFormattedDate } from '../utils/DateFormatter';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import { fetchMessages } from '../reducers/messagesReducers';
import { connect } from 'react-redux';

function App() {
  const limit = 50;
  const { error, loading, messagelist } = this.props;

  useEffect(() => {
    fetchMessages(limit);
  });

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!messagelist || !messagelist.length) {
    return <div>No messages</div>
  }

  return (
    <div data-testid="app">
      {/* <ListMessages 
        messagelist={this.props.messages} 
        error={this.props.error} 
        data-testid="messages" 
      /> */}
      <ol className="message-list">
        {messagelist.map((message) => (
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
  messagelist: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    messagelist: state.messagelist.messages,
    loading: state.messagelist.loading,
    error: state.messagelist.error,
  };
}

export default connect(mapStateToProps)(App);

// ORIGINAL API-CALL-WITHOUT_REDUX_STORE IMPORTS
// import { useState } from 'react';
// import { fetchMessages } from '../utils/MessagesAPI';

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
