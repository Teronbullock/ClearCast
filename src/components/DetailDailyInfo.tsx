import { DetailCard } from './DetailCard';
import useWeatherContext from '@hooks/useWeatherContext';
import Image from 'next/image';

export const DetailDailyInfo = () => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;
  const dailyAvg = weatherData?.dailyAvg;

  return (
    <>
      {dailyAvg && dailyAvg.length > 0 && (
        <DetailCard innerClassName='px-[1rem]'>
          <h5 className='text-left text-[12px] mb-[1.5rem]'>5-DAY FORECAST</h5>
          {Object.values(dailyAvg).map((list, index) => (
            <div
              key={index}
              className='grid grid-cols-3 xs:grid-cols-4 gap-2 mb-[.75rem] items-center border-t pt-2'
            >
              <span className='text-left mr-2'>{list.date}</span>
              {list.icon && (
                <div className='flex justify-center'>
                  <Image
                    className='hourly-weather__img w-[40px] h-[40px]'
                    alt='Weather Icon'
                    src={
                      weatherData
                        ? `http://openweathermap.org/img/wn/${list.icon}@2x.png`
                        : ''
                    }
                    width={40}
                    height={40}
                  />
                </div>
              )}
              <div className='text-left hidden xs:block'>
                {list.description}
              </div>
              <span className='text-right'>{list.temp}°</span>
            </div>
          ))}
        </DetailCard>
      )}
    </>
  );
};
