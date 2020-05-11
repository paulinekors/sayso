import React from 'react';
import { getFormattedDate } from '../utils/DateFormatter';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({ body, firstName, lastName, createdAt }) => (
  <div>
    <div className="comment">
      <p>{body}</p>
      <p className="comment__name">
        {firstName} {lastName}
      </p>
      <p className="comment__date">{getFormattedDate(new Date(createdAt))}</p>
      <Link to={`/`}>
        <button className="btn btn--white">Go back to messages</button>
      </Link>
    </div>
  </div>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
