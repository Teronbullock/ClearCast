import { useContext } from 'react';
import Image from 'next/image';
import { WeatherContext } from '@context/WeatherContext';

const DetailCardHourlyInfo = () => {
  const { weatherData } = useContext(WeatherContext);

  if (weatherData === null || undefined) {
    return (
      <div className='hourly-weather flex justify-center items-center min-h-[90px]'>
        <p className='hourly-weather__text m-0 text-base md:text-lg'>
          Loading...
        </p>
      </div>
    );
  } else if (weatherData) {
    return (
      <>
        <div className='hourly-weather flex justify-center items-center min-h-[90px]'>
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
          {weatherData.hourlyWeatherData
            ? Object.values(weatherData.hourlyWeatherData).map(list => (
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
      </>
    );
  }
};

export default DetailCardHourlyInfo;
