const ROOT_URL = 'http://localhost:3000';
import { inRange } from 'lodash';

//options requires the use of at least 1 method
export const fetchMessages = async (options = {}) => {
  const url = `${ROOT_URL}/messages`;
  const response = await fetch(url, { ...options, method: "GET" });

  if (inRange(response.status, 200, 300)) {
    const messages = await response.json();

    return {
      messages,
      error: null,
      status: response.status,
    };
  }
  return { messages: [], error: '', status: response.status };
};
 
