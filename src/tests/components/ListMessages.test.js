import '@testing-library/jest-dom'
import React from 'react'
import {render, cleanup} from '@testing-library/react';
import ListMessages from '../../components/ListMessages';

afterEach(cleanup);

const messages = [
  {
    id: 1048,
    title: 'Ex libero omnis quae corrupti voluptatibus sit.',
    body:
      'Doloremque sit eaque voluptate saepe esse. Distinctio magnam blanditiis vel. Aut ad nesciunt qui quia est. Officiis corrupti expedita non aut quasi totam.',
    category: 'Off-topic',
    firstName: 'Lieke',
    createdAt: '2020-04-29T14:07:32.202Z',
    updatedAt: null,
  },
  {
    id: 1049,
    title: 'Veritatis consequatur quos repellendus quis.',
    body:
      'Perspiciatis sint aperiam consequuntur voluptatem minus. Facilis laboriosam aliquam. Ut amet sapiente. Et ut veniam similique. Veritatis et consequatur rerum enim quam.',
    category: 'Off-topic',
    firstName: 'Roos',
    createdAt: '2020-04-29T14:07:32.202Z',
    updatedAt: null,
  },
];

// Return 'no messages' when rendering ListMessages when there are no messages
describe('ListMessages', () => {
  describe('when there are no messages', () => {
    it('renders no messages', () => {
      const { getByText } = render(
        <ListMessages messages={[]} error={false} />,
      );
      expect(getByText(/no messages/i)).toBeInTheDocument();
    });
  });
});

// Return messages when rendering ListMessages when there are messages
describe('ListMessages', () => {
    describe('when there are messages', () => {
      it('renders messages', () => {
        const { getByText } = render(
            <ListMessages messages={messages} error={false} />,
          );
          expect(getByText(/corrupti voluptatibus/i)).toBeInTheDocument();
          expect(getByText(/Roos/i)).toBeInTheDocument();
      });
    });
  });



