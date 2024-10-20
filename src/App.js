
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingModal from './components/BookingModal';
import EventList from './components/EventList';
import Layout from './components/Layout';
import LoginPage from './components/Login';
import MyBooking from './components/MyBooking';
import { AuthProvider } from './contexts/AuthContexts';
import store from './redux/store';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
              <Route path='/events' element={<Layout><EventList /></Layout>} />
              <Route path='/booking' element={<Layout><BookingModal /></Layout>} />
              <Route path='//my-bookings' element={<Layout><MyBooking /></Layout>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;