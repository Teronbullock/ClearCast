'use client';

import { createContext, Dispatch, SetStateAction } from 'react';
import { useGetWeatherData } from '@/hooks/useGetWeatherData';
import { WeatherDataType } from '@app-types/weatherDataTypes';

export const WeatherContext = createContext<{
  weatherData?: WeatherDataType | null;
  setWeatherData?: Dispatch<SetStateAction<WeatherDataType | null>> | null;
}>({
  weatherData: null,
  setWeatherData: () => null,
});

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { weatherData, setWeatherData } = useGetWeatherData();
  const value = {
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
