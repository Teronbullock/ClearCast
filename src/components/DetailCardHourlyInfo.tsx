import Image from 'next/image';
import { DetailCard } from '@components/DetailCard';
import useWeatherContext from '@hooks/useWeatherContext';

const DetailCardHourlyInfo = () => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;
  console.log('Here is the test: ', weatherData);
  if (weatherState?.status === 'success') {
    return (
      <DetailCard innerClassName='overflow-x-auto'>
        <div className='hourly-weather flex justify-center items-center min-h-[90px] overflow-auto w-[680px]'>
          <div className='hourly-weather__item w-full'>
            <p className='hourly-weather__text m-0 text-base md:text-lg'>Now</p>
            <Image
              className='hourly-weather__img w-[50px] h-[50px] mx-auto'
              alt='Weather Icon'
              src={
                weatherData
                  ? `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`
                  : ''
              }
              width={50}
              height={50}
            />
            <p className='hourly-weather__text m-0 text-base md:text-lg'>
              {weatherData ? `${weatherData.currentTemp}° ` : ''}
            </p>
          </div>
          {weatherData?.hourlyWeather
            ? Object.values(weatherData.hourlyWeather).map(list => (
                <div key={list.id} className='hourly-weather__item w-full'>
                  <p className='hourly-weather__text m-0 text-base md:text-lg'>
                    {list.time}
                  </p>
                  <Image
                    className='hourly-weather__img w-[50px] h-[50px] mx-auto'
                    alt='Weather Icon'
                    src={
                      weatherData
                        ? `http://openweathermap.org/img/wn/${list.weatherIcon}@2x.png`
                        : ''
                    }
                    width={50}
                    height={50}
                  />
                  <p className='hourly-weather__text m-0 text-base md:text-lg'>
                    {list.temp}
                  </p>
                </div>
              ))
            : null}
        </div>
      </DetailCard>
    );
  } else {
    return <></>;
  }
};

export default DetailCardHourlyInfo;
