import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userName } from '../redux/actions/userActions';
import { useAuth } from '../contexts/AuthContexts';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const history = useNavigate();
  const userNameValue = useSelector(state => state.user);
  useEffect(() => {
    dispatch(userName());
  }, [])
  const handleLogout = () => {
    logout();
    history("/")
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Event Booking System</Link>

          <div className='text-2xl font-bold'>
            <span >{userNameValue}</span>
          </div>

          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/events" className="hover:text-blue-200">Events</Link></li>
              <li><Link to="/my-bookings" className="hover:text-blue-200">My Bookings</Link></li>
              <li>
                <button onClick={handleLogout} className="hover:text-blue-200">Logout</button>
              </li>
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