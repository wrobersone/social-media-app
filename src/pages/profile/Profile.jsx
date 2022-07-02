import React from 'react';
import PostSide from '../../components/postSide/PostSide';
import ProfileCard from '../../components/profile/ProfileCard';
import ProfileLeft from '../../components/profile/profileLeft/ProfileLeft';
import RightSide from '../../components/rightSide/RightSide';
import './Profile.css';
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
