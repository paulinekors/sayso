import React from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import PropTypes from 'prop-types';

const Comment = ({ body, firstName, lastName, createdAt }) => (
  <div className="comment-details">
    <p>{body}</p>
    <p>
      {firstName} {lastName}
    </p>
    <p>{getFormattedDate(new Date(createdAt))}</p>
  </div>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
