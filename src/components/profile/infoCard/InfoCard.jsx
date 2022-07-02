import React from 'react';
import './infoCard.css';
import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-header">
        <h4>Profile Info</h4>
        <UilPen />
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> In a Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Location</b>
        </span>
        <span> U.S.A.</span>
      </div>

      <div className="info">
        <span>
          <b>Occupation</b>
        </span>
        <span> Software Engineer</span>
      </div>

      <button className="button"></button>
    </div>
  );
};

export default InfoCard;
