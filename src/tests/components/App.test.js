import '@testing-library/jest-dom'
import React from 'react';
import {render, within, cleanup, waitForElement} from '@testing-library/react';
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
      const { container, getByTestId, getByText } = render(<App />)
      waitForElement(() => getByText('app'))
      expect(container.children.length).toBe(1);
      expect(getByTestId('messages')).toBeDefined();
  });

  // it('should show a total of 50 messages', () => {
  //     const app = render(<App />)
  //     expect(app.firstChild).toHaveLength(50)
  // });

  // it('should show a total of 50 messages', () => {
  //     const { getByTestId } = render(<App />);
  //     const app = getByTestId('app');
  //     const messagesInApp = within(app).getAllByTestId('messages');
  //     expect(messagesInApp.length).toBe(50);
  // });
});


