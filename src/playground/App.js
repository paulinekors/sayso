//ORIGINAL API-CALL-WITHOUT_REDUX_STORE IMPORTS
import React, { useState, useEffect } from 'react';
import { fetchMessages } from '../utils/MessagesAPI';
import ListMessages from './ListMessages';

//ORIGINAL API-CALL-WITHOUT_REDUX_STORE CODE
function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const limit = 50;

  useEffect(() => {
    const fetch = async () => {
      try {
        const { error, messages } = await fetchMessages(limit);

        if (error) {
          throw error;
        }

        setMessages(messages);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetch();
  }, []);

  return (
    <div data-testid="app">
      <ListMessages messages={messages} error={error} data-testid="messages" />
    </div>
  );

}

export default App;
