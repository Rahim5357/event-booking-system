import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userName } from '../redux/actions/userActions';
import { useAuth } from '../contexts/AuthContexts';
import SearchBar from './SearchBar';
import Filters from './Filters';
import { getEventsList } from '../redux/actions/eventActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const history = useNavigate();
  const location = useLocation();
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  useEffect(() => {
    dispatch(userName());
  }, [dispatch]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getEventsList(search, { category: category === 'All' ? 'all' : category, priceRange }));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search, category, priceRange, dispatch]);

  const handleLogout = () => {
    logout();
    history('/');
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    dispatch(getEventsList(search, { category: newCategory === 'All' ? 'all' : newCategory, priceRange }));
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    dispatch(getEventsList(search, { category: category === 'All' ? 'all' : category, priceRange: newRange }));
  };

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when clicking close
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">EVENT BOOKING</Link>

          <nav className="hidden lg:block">
            <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Show SearchBar only on Events Page and only on larger screens */}
              {location?.pathname === '/events' && (
                <li className="hidden lg:block">
                  <SearchBar setSearch={setSearch} search={search} />
                </li>
              )}
              <li><Link to="/events" className="hover:text-blue-200">Events</Link></li>
              <li><Link to="/my-bookings" className="hover:text-blue-200">My Bookings</Link></li>
              <li>
                <button onClick={handleLogout} className="hover:text-blue-200">Logout</button>
              </li>
            </ul>
          </nav>
          
          {/* Menu Icon for small screens */}
          <button
            className="lg:hidden text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776; {/* This is the hamburger menu icon */}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Show Filters and SearchBar on Events Page */}
        {location?.pathname === '/events' && (
          <div>
            {/* Responsive layout for SearchBar and Filters */}
            <div className="flex flex-col sm:flex-col lg:flex-row lg:space-x-4">
              {/* SearchBar on top for small screens */}
              <div className="flex-1 lg:hidden">
                <SearchBar setSearch={setSearch} search={search} />
              </div>
              {/* Filters below SearchBar on small screens, next to it on large screens */}
              <div className="flex-1 mt-4 lg:mt-0">
                <Filters 
                  handlePriceRangeChange={handlePriceRangeChange} 
                  handleCategoryChange={handleCategoryChange} 
                  priceRange={priceRange} 
                  category={category} 
                />
              </div>
            </div>
          </div>
        )}
        {/* Render child components */}
        {children}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">

            <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
              &times;
            </button>

            <nav onClick={closeModal}>
              <ul className="flex flex-col items-center space-y-4">
                <li><Link to="/events" className="hover:text-blue-500">Events</Link></li>
                <li><Link to="/my-bookings" className="hover:text-blue-500">My Bookings</Link></li>
                <li>
                  <button onClick={handleLogout} className="hover:text-blue-500">Logout</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 Event Booking System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
