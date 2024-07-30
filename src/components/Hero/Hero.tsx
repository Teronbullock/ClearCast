import { useContext } from 'react';
import './Hero.scss';
import { WeatherContext } from '@/contexts/WeatherContext';
import getDate from '@/lib/getDate';
import getBackground from '@/lib/getBackground';

export default function Hero() {
  const { weatherData } = useContext(WeatherContext);
  const time = getDate('DMT');
  let heroStyles;

  if (weatherData === null || weatherData === false) {
    heroStyles = null;
  } else {
    const timeOfDay = {
      sunset: weatherData.sunset,
      sunrise: weatherData.sunrise,
    };

    const {bgImg} = getBackground(weatherData.weatherCondition, timeOfDay);

    heroStyles = {
      backgroundImage: `url(${bgImg})`,
    };
  }

  return (
    <div
      className="hero rounded-[10px] p-4 mb-6 round-[10px] shadow-[1px 1px 2px rgb(0,0,0, 0.2)] capitalize leading-tight bg-cover bg-center bg-no-repeat relative overflow-hidden after:content-[''] after:h-full after:w-full after:top-0 after:left-0 after:absolute after:bg-[#00000040] after:z-0"
      style={{ ...heroStyles }}
    >
      {weatherData === null ? (
        <>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            Loading Weather Data Please wait...
          </p>
        </>
      ) : weatherData === false ? (
        <>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            Please enable your browser location settings
          </p>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            or
          </p>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            enter the city info.
          </p>
        </>
      ) : (
        <>
          <div className='hero-section mb-5'>
            <p className='hero-info-standout text-lg font-semibold sm:text-2xl md:text-3xl hero-info-standout--top mb-3'>
              {weatherData.location}
            </p>
            <p className='hero-info-small m-0 text-base sm:text-xl'>{time}</p>
          </div>
          <div className='hero-section mb-5'>
            <p className='hero-info-standout text-lg font-semibold sm:text-2xl md:text-3xl'>
              {weatherData.weatherTypeDes}
            </p>
            <p className='hero-current-temp m-0 text-center text-[3.5rem] sm:text-[4rem] md:text-[4.68rem]'>
              {weatherData.currentTemp}
            </p>
            <p className='hero-info-small m-0 text-base sm:text-xl'>
              Hi {weatherData.highTemp} / Lo {weatherData.lowTemp}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
