import React, { useState, useEffect } from 'react';
//Himport ListMessages from './ListMessages';
//import * as MessagesAPI from '../utils/MessagesAPI';

function App() {
  const [messages, setMessages] = useState([]);

  async function getMessages() {
    const response = await fetch('http://localhost:3000/messages', { mode: "no-cors" });
    const messages = await response.json();
    setMessages(messages);

    console.log("response:", response);
    console.log("messages:", messages);

  }

  useEffect(() => {
      getMessages();
  }, []);

  return (
    //   <ListMessages messages={messages} />
    <div>
      {messages.map((message) => (
        <li key={message.id}>{message.title}</li>
      ))}
    </div>
  );
}

export default App;
