import React from 'react';
import './TrendCard.css';
import { TrendData } from '../../data/TrendData';

const TrendCard = () => {
  return (
    <div className="trend-card">
      <h3>Popular Trends</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>#{trend.shares}K Shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
