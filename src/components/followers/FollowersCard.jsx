import React from 'react';
import './follow.css';

import { Followers } from '../../data/FollowerData';

const FollowersCard = () => {
  return (
    <div className="follower-card">
      <h3>Who follows you?</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.image} alt="" className="follower-image" />
              <div className="follower-name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
