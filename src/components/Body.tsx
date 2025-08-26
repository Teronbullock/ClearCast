'use client';
import { ReactNode } from 'react';
import { getBackground } from '@lib/getBackground';
import useWeatherContext from '@hooks/useWeatherContext';

export const Body = ({ children }: { children: ReactNode }) => {
  const { weatherState } = useWeatherContext();
  const weatherData = weatherState?.weatherData;
  const { sunrise, sunset, weatherCondition } = weatherData ?? {};
  const appBodyStyle =
    sunrise && sunset && weatherCondition
      ? {
          backgroundColor: getBackground(weatherCondition, {
            sunrise,
            sunset,
          }).bgColor,
        }
      : null;

  return (
    <div
      className='app-body min-h-[100vh] p-4 bg-[#174b9f] text-white text-center'
      id='app-body'
      style={{ ...appBodyStyle }}
    >
      <div className='app-body-container mt-[3.5rem] md:max-w-max-[70%] md:mx-auto xl:w-1/2'>
        {children}
      </div>
    </div>
  );
};
