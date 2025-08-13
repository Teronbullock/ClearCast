'use client';

import { useState } from 'react';
import React, { createContext, Dispatch, SetStateAction } from 'react';
import { useGeoWeatherData } from '@hooks/useGeoWeatherData';
import { WeatherState } from '@app-types/weatherDataTypes';

export const WeatherContext = createContext<{
  weatherState?: WeatherState;
  setWeatherState?: Dispatch<SetStateAction<WeatherState>>;
}>({
  weatherState: {
    status: 'idle',
    weatherData: null,
    error: null,
  },
  setWeatherState: () => null,
});

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
