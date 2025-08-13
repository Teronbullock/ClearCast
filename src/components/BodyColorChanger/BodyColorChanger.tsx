'use client';

import useWeatherContext from '@hooks/useWeatherContext';
import { getBackground } from '@lib/getBackground';

const BodyColorChange = () => {
  const weatherData = useWeatherContext()?.weatherState?.weatherData;
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
