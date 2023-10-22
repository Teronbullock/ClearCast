import React from 'react';
import './DetailCardInfo.scss';

export default function DetailCardInfo({ data }) {
  return (
    <div className="detail-info">
      {data.map((item, index) => (
        <div className="detail-info__item" key={index}>
          <p className="detail-info__title">
            {item.title}
          </p>
          <p className="detail-info__info">
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
};
