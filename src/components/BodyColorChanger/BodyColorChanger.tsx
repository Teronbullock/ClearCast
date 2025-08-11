'use client';

import { useContext } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import { getBackground } from '@/lib/getBackground';

const BodyColorChange = () => {
  const { weatherData } = useContext(WeatherContext);
  const { sunset, sunrise, weatherCondition } = weatherData ?? {};

  const bgColor =
    sunset && sunrise && weatherCondition
      ? getBackground(weatherCondition, {
          sunrise,
          sunset,
        }).bgColor
      : null;

  return bgColor;
};

export default BodyColorChange;
