import React from 'react';

interface InfoProps {
  data: {
    title: string;
    info: string;
  }[];
}

const DetailCardInfo = ({ data }: InfoProps) => {
  return (
    <div className='detail-info grid grid-cols-2 grid-rows-[40px] md:grid-rows-[55px] items-center w-[95%]'>
      {data.map((item, index) => (
        <div className='detail-info__item text-white' key={index}>
          <p className='detail-info__content text-base md:text-lg tracking-[1px] mt-2'>
            {item.title}
          </p>
          <p className='detail-info__content text-sm md:text-base lg:text-lg mt-2'>
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailCardInfo;
