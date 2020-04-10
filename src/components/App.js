import React, { useState, useEffect } from 'react';
import { inRange } from 'lodash';
import ListMessages from './ListMessages';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
//import * as MessagesAPI from '../utils/MessagesAPI';

function App() {
  const [messages, setMessages] = useState([]);
  const [isError, setError] = useState(false);
  const api = 'http://localhost:3000';
  const limit = 50;

  async function getMessages() {
    const response = await fetch(`${api}/messages?limit=` + limit);
    if (inRange(response.status, 200, 300)) {
      const messages = await response.json();
      setMessages(messages);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
      <ListMessages 
        messages={messages} 
        isError={isError}
       />
  );
}

export default App;
