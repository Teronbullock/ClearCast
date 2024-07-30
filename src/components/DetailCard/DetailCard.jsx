import React from 'react';


const DetailCard = ({ children }) => {
  return (
    <div className="detail-card mx-auto mt-0 mb-3 items-center rounded-[10px] overflow-hidden shadow-[1px 1px 2px rgb(0,0,0, 0.2)] sm:my-3 sm:mx-auto">
      <div className="detail-card__inner detail-card--mask backdrop-blur-sm bg-[#56585E] w-full h-min-[55px] mx-auto py-2 px-1 sm:p-2 md:p-6 h-min-[70px]">
        {children}
      </div>
    </div>
  );
};

export default DetailCard;
