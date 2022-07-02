import React from 'react';
import './home.css';
import Profile from '../../components/profile/Profile';

import PostSide from '../../components/postSide/PostSide';
import RightSide from '../../components/rightSide/RightSide';

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
