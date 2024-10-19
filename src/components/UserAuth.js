import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, userLogout } from '../redux/actions/userActions';

const UserAuth = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(username));
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  if (user.isAuthenticated) {
    return (
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
        <span>Welcome, {user.username}!</span>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default UserAuth;