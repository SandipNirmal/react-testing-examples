import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../redux/users/userActions';
import User from './User';

export default function UserList() {
  const { loading, error, users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
