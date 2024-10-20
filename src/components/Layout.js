import React, { useEffect, useState } from 'react';
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
  let location = useLocation();
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [search, setSearch] = useState('');
  const userNameValue = useSelector(state => state.user);
  useEffect(() => {
    dispatch(userName());
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getEventsList(search, { category: category === 'All' ? "all" : category, priceRange }));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleLogout = () => {
    logout();
    history("/")
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    dispatch(getEventsList(search, { category: newCategory === 'All' ? "all" : newCategory, priceRange }));
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    dispatch(getEventsList(search, { category: category === 'All' ? "all" : category, priceRange: newRange }));
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
            <ul className="flex items-center space-x-4">
              {
                location?.pathname == "/events" && (
                  <li>
                    <SearchBar setSearch={setSearch} search={search} />
                  </li>
                )
              }
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
        {
          location?.pathname == "/events" && (
            <div>
              <Filters handlePriceRangeChange={handlePriceRangeChange} handleCategoryChange={handleCategoryChange} priceRange={priceRange} category={category} />
            </div>
          )
        }
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