'use client';

import { useContext } from 'react';
import { WeatherContext } from '@context/WeatherContext';

const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
};

export default useWeatherContext;
