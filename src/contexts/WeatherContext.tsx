"use client";

import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import {  getPosition } from '@/lib/contextUtils';


interface ProviderProps {
  children: React.ReactNode;
}

interface WeatherDataProps {
  currentTemp: string;
  highTemp: string;
  humidity: string;
  lowTemp: string;
  pressure: string;
  realFeel: string;
  sunrise: number;
  sunset: number;
  weatherCondition: string;
  weatherIcon: string;
  weatherTypeDes: string;
  wind: string;
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
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  useEffect(() => {
    (async ()=> {
      try {
        const position = await getPosition();

        const res = await axios.get(`/api/weather/?lat=${position.lat}&lon=${position.lon}`);

        if (res.status !== 200) {
          throw new Error('WeatherContext useEffect error');
        }

        console.log('returning data:', res.data);
        setWeatherData(res.data.data);
      } catch (error) { 
        console.error('WeatherContext useEffect error', error);
      }
    })();


    // getWeatherData().then( (data) => {
    //   try {
    //     setWeatherData(data);
    //   } catch (error) {
    //     setWeatherData(false);
    //     console.log('WeatherContext useEffect error', error); 
    //   }

    // });
  }, []);

  const value = {
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
