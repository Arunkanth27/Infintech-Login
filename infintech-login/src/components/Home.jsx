import React from 'react';
import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;

