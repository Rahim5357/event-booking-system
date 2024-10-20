
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import UserAuth from './components/UserAuth';
import EventDataChart from './components/EventDataChart';
import EventPopularityChart from './components/EventPopularityChart';
import LoginPage from './components/Login';
import { AuthProvider } from './contexts/AuthContexts';
import BookingModal from './components/BookingModal';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
              <Route path='/events' element={<Layout><EventList /></Layout>} />
              <Route path='/booking' element={<Layout><BookingModal /></Layout>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;