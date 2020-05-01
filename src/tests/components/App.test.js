import '@testing-library/jest-dom'
import React from 'react';
import {render, within, cleanup, waitFor} from '@testing-library/react';
import response from '../components/ListMessages.mock';
import nock from 'nock';
import App from '../../components/App';

afterEach(cleanup);

// Return a total of 50 messages when rendering ListMessages 
describe('App', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/messages?limit=50/')
      .reply(200, response);
  });

  it('should render its children', () => {
      const { container, getByTestId } = render(<App />)
      waitFor(() => getByTestId('messages'))
      expect(container.children.length).toBe(1);
  });

  it('should show a total of 50 messages', async () => {
      const { getByTestId } = render(<App />);
      waitFor(() => getByTestId('messages'))
      const app = getByTestId('app');
      const messagesInApp = within(app).getAllByTestId('messages');
      expect(messagesInApp.length).toBe(50);
  });
});


