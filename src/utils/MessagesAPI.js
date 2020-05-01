import fetch from "node-fetch"
import { inRange } from 'lodash';
const ROOT_URL = 'http://localhost:3000';

export const fetchMessages = async (limit) => {
  const url = `${ROOT_URL}/messages?limit=${limit}`
  const response = await fetch(url);

  if (inRange(response.status, 200, 300)) {
    const messages = await response.json();

    return {
      messages: messages,
      error: null,
      status: response.status,
    };
  }
  return { messages: [], error: '', status: response.status };
};
