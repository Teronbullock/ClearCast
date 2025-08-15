'use client';

import { useState, ChangeEvent } from 'react';
import useWeatherContext from '@hooks/useWeatherContext';
import { fetchWeather } from '@lib/fetchWeather';
import { VALIDATION_REGEX } from '@/constants/validation';
import { WeatherState } from '@/types/weatherDataTypes';

export const useWeatherDataForm = () => {
  const { setWeatherState } = useWeatherContext();
  const [inputValue, setInputValue] = useState('');
  const isPlaceholder = inputValue.length === 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    if (inputValue.length === 0) setInputValue('');
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === '') setInputValue('');
  };

  const handleFromSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();
    let weatherDataObj: WeatherState;

    // check for input type then fetch data
    if (VALIDATION_REGEX.zipCode.test(trimmedInput)) {
      weatherDataObj = await fetchWeather('zip', inputValue);
    } else if (VALIDATION_REGEX.cityState.test(trimmedInput)) {
      weatherDataObj = await fetchWeather('city', inputValue);
    } else {
      weatherDataObj = {
        status: 'error',
        weatherData: null,
        error: 'Invalid user input',
      };
      console.error('Invalid user input');
      console.dir('Invalid user input');
    }

    // update state
    if (setWeatherState && weatherDataObj) {
      setWeatherState(weatherDataObj);
    } else if (setWeatherState) {
      setWeatherState({
        status: 'idle',
        weatherData: null,
      });
    }

    // clear form input
    setInputValue('');
  };

  return {
    isPlaceholder,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleFromSubmit,
    inputValue,
  };
};
