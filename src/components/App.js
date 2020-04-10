import React, { useState, useEffect } from 'react';
// import { inRange } from 'lodash';
import ListMessages from './ListMessages';
import '../styles/styles.scss';
import 'normalize.css/normalize.css';
import * as MessagesAPI from '../utils/MessagesAPI';


function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const limit = 50;

  useEffect(async () => {
    const { error, messages } = await MessagesAPI.fetchMessages(`?limit=` + limit);
    if (error) {
        setError(error)
    } else {
        setMessages(messages)
    }
  }, []);

  return (
      <ListMessages 
        messages={messages} 
        error={error}
       />
  );
}

export default App;


  //   const ROOT_URL = 'http://localhost:3000';

//   async function getMessages() {
//     const response = await fetch(`${ROOT_URL}/messages?limit=` + limit);
//     if (inRange(response.status, 200, 300)) {
//       const messages = await response.json();
//       setMessages(messages);
//     } else {
//       setError(true);
//     }
//   }

//   useEffect(() => {
//     getMessages();
//   }, []);