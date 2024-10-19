
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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LoginPage />} />

            <Route element={<Layout />}>
              <Route path='/events' element={<EventList />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}

{/* 
  <UserAuth />
<div className="container mx-auto px-4">
  <SearchBar />
  <Filters /> */}
{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <EventDataChart />
    <EventPopularityChart />
  </div> */}
{/* <EventList />
</div>
</Layout> */}
export default App;