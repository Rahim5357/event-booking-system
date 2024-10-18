
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './components/Layout';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import UserAuth from './components/UserAuth';
import EventDataChart from './components/EventDataChart';
import EventPopularityChart from './components/EventPopularityChart';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <UserAuth />
        <div className="container mx-auto px-4">
          <SearchBar />
          <Filters />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventDataChart />
            <EventPopularityChart />
          </div>
          <EventList />
        </div>
      </Layout>
    </Provider>
  );
}

export default App;