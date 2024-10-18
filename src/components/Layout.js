import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/userActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Event Booking System</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
              <li><Link to="/events" className="hover:text-blue-200">Events</Link></li>
              {isAuthenticated ? (
                <>
                  <li><Link to="/my-bookings" className="hover:text-blue-200">My Bookings</Link></li>
                  <li>
                    <button onClick={handleLogout} className="hover:text-blue-200">Logout</button>
                  </li>
                  <li className="text-blue-200">Welcome, {user.name}</li>
                </>
              ) : (
                <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 Event Booking System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;