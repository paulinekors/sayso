import React, { useState, useEffect } from 'react';
import ListMessages from './ListMessages';
import { fetchMessages } from '../utils/MessagesAPI';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';

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
          console.error(error)
        setError(true);
      }
    };

    fetch();
  }, []);

  return <ListMessages messages={messages} error={error} />;
}

export default App;