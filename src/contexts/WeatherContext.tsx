"use client";

import { createContext, useState, useEffect } from 'react';
import { getWeatherData } from '@/lib/contextUtils';

interface ProviderProps {
  children: React.ReactNode;
}

interface WeatherDataProps {
  currentTemp: number;
  weatherIcon: string;
  hourlyWeatherData: {
    id: number;
    time: string;
    weatherIcon: string;
    temp: number;
  }[];
}


export const WeatherContext = createContext({
  weatherData: null,
  setWeatherData: () => null,
});

export const WeatherContextProvider = ({ children }: ProviderProps ) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData().then( (data ) => {
      try {
        setWeatherData(data);
      } catch (error) {
        setWeatherData(false);
        console.log('WeatherContext useEffect error', error); 
      }

    });
  }, []);

  const value = {
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
