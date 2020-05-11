import React from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import PropTypes from 'prop-types';

const Comment = ({ body, firstName, lastName, createdAt }) => (
  <div className="comment">
    <p>{body}</p>
    <p className="comment__name">
      {firstName} {lastName}
    </p>
    <p className="comment__date">{getFormattedDate(new Date(createdAt))}</p>
  </div>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
