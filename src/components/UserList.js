import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const defaultProps = {
  users: []
};

export default function UserList({ users, loading, error }) {
  return (
    <div className="container">
      <h3>User List</h3>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {users.length ? (
        users.map(user => <User key={user.id} {...user} />)
      ) : (
        <div>No Users Available</div>
      )}
    </div>
  );
}

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;
