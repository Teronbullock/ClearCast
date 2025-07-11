'use client';

import { useState, ChangeEvent } from 'react';
import UseWeatherContext from '@context/hooks/UseWeatherContext';
import { WeatherApiClient } from '@/lib/WeatherApiClient';
import { mapWeatherData } from '@/lib/mapWeatherData';

export const useWeatherDataForm = () => {
  const { setWeatherData } = UseWeatherContext();
  const [inputValue, setInputValue] = useState('');
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (e.target.value.length === 0) {
      setIsPlaceholder(true);
    } else {
      setIsPlaceholder(false);
    }
  };

  const handleInputFocus = () => {
    setIsPlaceholder(false);
  };

  const handInputBlur = () => {
    if (inputValue.length === 0) {
      setIsPlaceholder(true);
    }
  };

  const handleFromSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if input value is a zip code or city, state
    const zipCodeRegex = /^\d{5}$/;
    const city2DigitStateRegex = /^[A-Za-z\s]+,\s*[A-Za-z]{2}$/;
    const cityStateRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

    const isZipCode = zipCodeRegex.test(inputValue);
    const isCity2DigitState = city2DigitStateRegex.test(inputValue);
    const isCityState = cityStateRegex.test(inputValue);

    if (isZipCode) {
      try {
        const rawWeatherData = await new WeatherApiClient('zip', {
          string: inputValue,
        }).getData();
        const weatherData = mapWeatherData(rawWeatherData);

        if (weatherData && setWeatherData) {
          console.log('zip:', weatherData);
          setWeatherData(weatherData);
        }
      } catch (err) {
        console.log('There was an error obtaining your city', err);
        alert('There was an error obtaining your city, please try again');
      }
    } else if (isCity2DigitState || isCityState) {
      try {
        const rawWeatherData = await new WeatherApiClient('city', {
          string: inputValue,
        }).getData();

        const weatherData = mapWeatherData(rawWeatherData);

        if (weatherData && setWeatherData) {
          console.log('city zip:', weatherData);
          setWeatherData(weatherData);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log('There was an error obtaining your city: ', err.message);
        } else {
          console.error(String(err));
        }

        alert('There was an error obtaining your city, please try again');
      }
    } else {
    }
    // clear form input
    setInputValue('');
  };

  return {
    isPlaceholder,
    handleInputChange,
    handleInputFocus,
    handInputBlur,
    handleFromSubmit,
    inputValue,
  };
};
