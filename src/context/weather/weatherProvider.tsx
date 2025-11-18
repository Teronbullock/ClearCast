'use client';

import { useState } from 'react';
import { WeatherContext } from '@/context/weather/weatherContext';
import { useGeoWeatherData } from '@hooks/useGeoWeatherData';
import { WeatherState } from '@app-types/weatherDataTypes';

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherState, setWeatherState] = useState<WeatherState>({
    status: 'idle',
    weatherData: null,
    error: null,
  });

  useGeoWeatherData(setWeatherState);

  const value = { weatherState, setWeatherState };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
