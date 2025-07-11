'use client';
import { ReactNode } from 'react';
import { getBackground } from '@lib/getBackground';
import UseWeatherContext from '@context/hooks/UseWeatherContext';

export const Body = ({ children }: { children: ReactNode }) => {
  const { weatherData } = UseWeatherContext();
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
      <div className='app-body-container mt-[4rem] md:max-w-max-[70%] md:m-auto xl:w-1/2'>
        {children}
      </div>
    </div>
  );
};
