'use client';

import { createContext, Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';
import { WeatherState } from '@app-types/weatherDataTypes';

interface WeatherContextValue {
  weatherState?: WeatherState;
  setWeatherState?: Dispatch<SetStateAction<WeatherState>>;
}

/**
 * Weather Context
 */
export const WeatherContext = createContext<WeatherContextValue>({
  weatherState: {
    status: 'idle',
    weatherData: null,
    error: null,
  },
  setWeatherState: () => null,
});

/**
 * Weather Context Hook
 *
 */
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
};
