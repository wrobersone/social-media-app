import React from 'react';
import './profile.css';
import Cover from '../../img/cover.jpg';
import ProfilePic from '../../img/profileImg.jpg';

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={Cover} alt="" />
        <img src={ProfilePic} alt="" />
      </div>

      <div className="profile-name">
        <span>Zendaya Jones</span>
        <span>UI/UX Designer</span>
      </div>

      <div className="follow-status">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
