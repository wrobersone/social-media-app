import React from 'react';
import './home.css';
import Profile from '../../components/profile/Profile';
import Feed from '../../components/feed/Feed';

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <Feed />
      <div className="feature-section">Features</div>
    </div>
  );
};

export default Home;
