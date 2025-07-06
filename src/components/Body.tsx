'use client';
import React from 'react';
import getBackground from '@lib/getBackground';
import UseWeatherContext from '@context/hooks/UseWeatherContext';

interface AppBodyProps {
  children: React.ReactNode;
}

const Body: React.FC<AppBodyProps> = ({ children }) => {
  const { weatherData } = UseWeatherContext();
  let appBodyStyle: { backgroundColor: string } | null = null;

  if (weatherData) {
    const timeOfDay = {
      sunset: weatherData?.sunset,
      sunrise: weatherData?.sunrise,
    };

    const { bgColor } = getBackground(weatherData?.weatherCondition, timeOfDay);

    appBodyStyle = {
      backgroundColor: bgColor,
    };
  }

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

export default Body;
