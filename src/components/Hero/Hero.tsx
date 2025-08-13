import './Hero.scss';
import useWeatherContext from '@hooks/useWeatherContext';
import { getDate } from '@lib/getDate';
import { getBackground } from '@lib/getBackground';

export const Hero = () => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;

  const time = getDate('DMT');
  const { sunset, sunrise, weatherCondition } = weatherData ?? {};
  const heroStyles =
    sunset && sunrise && weatherCondition
      ? {
          backgroundImage: `url(${
            getBackground(weatherCondition, {
              sunset,
              sunrise,
            }).bgImg
          })`,
        }
      : null;

  return (
    <div
      className="hero rounded-[10px] p-4 mb-6 round-[10px] shadow-[1px 1px 2px rgb(0,0,0, 0.2)] capitalize leading-tight bg-cover bg-center bg-no-repeat relative overflow-hidden after:content-[''] after:h-full after:w-full after:top-0 after:left-0 after:absolute after:bg-[#00000040] after:z-0 tracking-[1px]"
      style={{ ...heroStyles }}
    >
      {weatherState?.status === 'loading' ? (
        <>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            Loading Weather Data Please wait...
          </p>
        </>
      ) : weatherState?.status === 'error' &&
        weatherState?.error === 'Permission denied.' ? (
        <>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            Please enable your browser location settings
          </p>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            or
          </p>
          <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
            enter zip code or city name and state 2 digit initial.
          </p>
        </>
      ) : weatherState?.status === 'error' &&
        weatherState?.error !== 'Permission denied.' ? (
        <p className='hero-info-message mb-1 text-base normal-case sm:text-xl'>
          Please enter zip code or city name and state 2 digit initial.
        </p>
      ) : weatherState?.status === 'success' ? (
        <>
          <div className='hero-section mb-5'>
            <p className='hero-info-standout text-[1.5rem] font-semibold sm:text-2xl md:text-3xl hero-info-standout--top mb-3'>
              {weatherData?.location}
            </p>
            <p className='hero-info-small m-0 text-[1.3rem] sm:text-xl'>
              {time}
            </p>
          </div>
          <div className='hero-section mb-5'>
            <p className='hero-info-standout text-[1.5rem] font-semibold sm:text-2xl md:text-3xl'>
              {weatherData?.weatherTypeDes}
            </p>
            <p className='hero-current-temp m-0 text-center text-[4rem] sm:text-[4rem] md:text-[4.68rem]'>
              {weatherData?.currentTemp}
            </p>
            <p className='hero-info-small m-0 text-[1.3rem] sm:text-xl'>
              Hi {weatherData?.highTemp} / Lo {weatherData?.lowTemp}
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
