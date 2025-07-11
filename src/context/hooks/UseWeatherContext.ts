'use client';

import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const UseWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
};

export default UseWeatherContext;
