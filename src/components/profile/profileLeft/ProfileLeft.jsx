import React from 'react';
import './profileleft.css';
import Search from '../../search/Search';
import FollowersCard from '../../followers/FollowersCard';
import InfoCard from '../infoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className="profile-left">
      <Search />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
