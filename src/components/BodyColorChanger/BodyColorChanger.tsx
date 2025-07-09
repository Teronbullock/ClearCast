'use client';

import { useContext } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import getBackground from '@/lib/getBackground';

const BodyColorChange = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log('bodyBG: ', weatherData);

  const timeOfDay = {
    sunset: weatherData?.sunset,
    sunrise: weatherData?.sunrise,
  };

  const { bgColor } = getBackground(weatherData?.weatherCondition, timeOfDay);

  return bgColor;
};

export default BodyColorChange;
