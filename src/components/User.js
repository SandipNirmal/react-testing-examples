import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default function User({ name, id, email, username }) {
  return (
    <div className="user" data-testid={`user-${id}`}>
      <div>
        <span>{name}</span>
        <span> ({username})</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{email}</span>
      </div>
    </div>
  );
}

User.propTypes = propTypes;
