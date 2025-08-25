import { DetailCard } from './DetailCard';
import useWeatherContext from '@hooks/useWeatherContext';

export const DetailDailyInfo = () => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;
  const dailyAvg = weatherData?.dailyAvg;

  console.log(weatherState, dailyAvg);

  return (
    <DetailCard innerClassName='px-[1rem]'>
      <h5 className='text-left text-[12px] mb-[1.5rem]'>4-DAY FORECAST</h5>
      {Object.values(dailyAvg).map((list, index) => (
        <div key={index} className='flex justify-between mb-[1.5rem]'>
          <span>{list.date}</span>
          <div className='text-left'>{list.main}</div>
          <div>
            <span>{list.minTemp}°</span>
            <span> / </span>
            <span>{list.maxTemp}°</span>
          </div>
        </div>
      ))}
    </DetailCard>
  );
};
