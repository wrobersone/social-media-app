import React from 'react';
import FollowersCard from '../followers/FollowersCard';
import Search from '../search/Search';
import ProfileCard from './ProfileCard';

const Profile = () => {
  return (
    <div className="profile">
      <Search />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default Profile;
