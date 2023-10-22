import React from 'react';
import './DetailCard.scss';

export default function DetailCard({ children }) {
  return (
    <div className="detail-card">
      <div className="detail-card__inner detail-card--mask">
        {children}
      </div>
    </div>
  );
};
