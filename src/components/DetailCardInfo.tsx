import { DetailCard } from '@components/DetailCard';

interface InfoProps {
  data: {
    title: string;
    info: string;
  }[];
}

export const DetailCardInfo = ({ data }: InfoProps) => {
  return (
    <DetailCard>
      <div className='detail-info grid auto-cols-auto grid-cols-3'>
        {data.map((item, index) => (
          <>
            <div key={index} className=' items-center w-full'>
              <div className='detail-info__item text-white'>
                <p className='detail-info__content text-base md:text-lg tracking-[1px] mt-2'>
                  {item.title}
                </p>
                <p className='detail-info__content text-sm md:text-base lg:text-lg mt-2'>
                  {item.info}
                </p>
              </div>
            </div>
            {index < data.length - 1 && (
              <div className='w-[1px] h-full bg-white mx-auto'></div>
            )}
          </>
        ))}
      </div>
    </DetailCard>
  );
};
