const ROOT_URL = 'http://localhost:3000';
import { inRange } from 'lodash';
import "core-js/stable";
import "regenerator-runtime/runtime";

export const fetchMessages = async (options) => {
  const url = `${ROOT_URL}/messages`;
  const response = await fetch(url, options);

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
